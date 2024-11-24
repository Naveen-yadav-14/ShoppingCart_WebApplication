import axios from "axios"

export const getProducts = async () =>{
        try{
            const response =await axios.get('http://localhost:8089/api/v3/products')
            console.log('API Response:',response.data)
            return response.data
        }
        catch(error){
            console.log(error)
            return[]
        }
}