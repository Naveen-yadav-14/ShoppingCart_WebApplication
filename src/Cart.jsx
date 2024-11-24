import { useDispatch, useSelector } from "react-redux";
import { addPurchase, clearCart, decrement, increment, remove } from "./store";
import { useState } from "react";

function Cart(){

    const cartItems= useSelector((state)=>state.cart)

    const dispatch = useDispatch()

    

    const listItems= cartItems.map((item,index)=>(
        <li key={index}>{item.name}-${item.price}-
        <button className="btn btn-success" onClick={()=>dispatch(increment(item))}>+</button>
        <button className="btn btn-danger" onClick={()=>dispatch(decrement(item))}>-</button>
        <button className="btn btn-success" onClick={()=>dispatch(remove(item))}>Remove</button>
        Quantity:{item.quantity}
        </li>
    ))

    const[discountPercentage, setDiscountPercentage]= useState(0)
   

   const handleDiscountPercentage=(dvalue)=>{
                        setDiscountPercentage(dvalue)
   }

   const[couponCode,setCouponCode]=useState('')

   const[couponDiscountPercentage,setCouponDiscountPercentage] = useState(0)

   const handleCoupon=()=>{
    switch(couponCode){
        case "DIWALI":
            setCouponDiscountPercentage(10)
            break
        case "NEWYEAR":
            setCouponDiscountPercentage(20)
            break
        default:
            alert("invalid coupon code")
    }
   }




  const calculate=()=>{
    const total = cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0)

    const disAmount = total*discountPercentage/100;

    const couponDisAmount = total*couponDiscountPercentage/100;

    const finalAmount = total-disAmount-couponDisAmount

    return{
        total:parseFloat(total.toFixed(2)),
        disAmount:parseFloat(disAmount.toFixed(2)),
        couponDisAmount:parseFloat(couponDisAmount.toFixed(2)),
        finalAmount:parseFloat(finalAmount.toFixed(2))
    }

  }
            const{total,disAmount,couponDisAmount,finalAmount}=calculate();


    const handleCompletePurchase=()=>{
       const {finalAmount} = calculate();
       const date = new Date().toLocaleDateString();

       const purchaseDetails={
        purchaseDate : date,
        amount : Number(finalAmount),
        items:[...cartItems]
       };

       dispatch(clearCart());

       dispatch(addPurchase(purchaseDetails))
    }

    return(
        <>
        {listItems.length>0?
            <>
            <ul>{listItems}</ul>
            <p>Total before discount:{total}</p>
            <button className="btn btn-primary" onClick={()=>handleDiscountPercentage(10)}>Apply 10% Discount</button>
            <button className="btn btn-secondary" onClick={()=>handleDiscountPercentage(20)}>Apply 20% Discount</button>
            <button className="btn btn-dark" onClick={()=>handleDiscountPercentage(30)}>Apply 30% Discount</button>
            <p>Applied discount:{discountPercentage}%</p>
            <p>Discount Amount:{disAmount}</p>
            <label>Apply coupon </label>
            <input type="text" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder="Enter coupon code"/>
            <button class="btn btn-primary btn-custom" onClick={()=>handleCoupon()}>Apply Coupon</button>
            <p>Coupon Discount Amount:{couponDisAmount}</p>
            <p>Total After Discount:{finalAmount}</p>

            <button class="btn btn-primary btn-dark" className="btn btn-success px-3 px-md-5 py-2 py-md-3" onClick={handleCompletePurchase}>Complete Purchase</button>
            
            
            </>
            :<h2>your cart is empty</h2>
            
        }
        
         
        
       
        </>
    )
}
export default Cart;