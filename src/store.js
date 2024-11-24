import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./service/ProductService";
import { thunk } from "redux-thunk";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        const response = await getProducts();
        
        const veg = response.filter(item=>item.category==='veg')
        const nonveg = response.filter(item=>item.category==='nonveg')
        console.log("veg items are:",veg)

        return {veg,nonveg};
    }
)

const productSlice = createSlice(
    {
        name:'products', initialState:{
            veg:[],
            nonveg:[],
            status:''
        },
        reducers:{},
    extraReducers: (bulilder)=>{
        bulilder.addCase(fetchProducts.pending, (state)=>{
            state.status='loading'
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='success'
            state.veg = action.payload.veg||[];
            state.nonveg = action.payload.nonveg||[];
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status='failed'
            state.error = action.error.message
        })
    }
})

const cartSlice = createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:{
            addToCart:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
                if(status)
                {
                    status.quantity+=1
                }
                else{
                    state.push({...action.payload,quantity:1})
                }
            },
            increment:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
                if(status)
                {
                    status.quantity+=1
                }
            },
            decrement:(state,action)=>{
                const status = state.find(item=>item.name===action.payload.name)
                if(status&&status.quantity>1)
                {
                    status.quantity-=1
                }
                else{
                    return state.filter(item=>item.name!=action.payload.name)
                }
            },
            remove:(state,action)=>{
                return state.filter(item=>item.name!=action.payload.name)
            },
            clearCart:()=>[]
        }
    }
)
export const {addToCart,increment,decrement,remove,clearCart} = cartSlice.actions

const purchaseHistorySlice = createSlice({
    name:'purchaseHistory',
    initialState:[],
    reducers:{
        addPurchase:(state,action)=>{
            state.push(action.payload)
        }
    }
})

const store = configureStore(
    {
        reducer:
        {products:productSlice.reducer,
        cart:cartSlice.reducer,
        purchaseHistory:purchaseHistorySlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
    }
)



export const{addPurchase}=purchaseHistorySlice.actions

export default store