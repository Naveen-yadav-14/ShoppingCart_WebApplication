import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import './App.css'
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";
import "@fortawesome/fontawesome-free/css/all.css";

import 'bootstrap/dist/css/bootstrap.min.css';



function App(){

  const cart = useSelector(state=>state.cart)

  const listItems = cart.reduce((sum,item)=>sum+item.quantity,0)

  return(
    <>
    
    <GoogleOAuthProvider clientId="133276535833-7h7u10q4i403og5jemdsifkinesqfn5q.apps.googleusercontent.com">
      <GoogleLoginComponent/>
    </GoogleOAuthProvider>
    <BrowserRouter>
    <nav >
    <Link to='/home'><i className="fa-solid fa-house"></i>Home</Link>
    <Link to='/veg'><i className="fa-solid fa-carrot"></i>Veg</Link>
    <Link to={'/nonveg'}><i className="fa-solid fa-drumstick-bite"></i>Non-Veg</Link>
    <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i>Cart{listItems}</Link>
    <Link to={'/purchase'}><i className="fa-solid fa-business-time"></i>PurchaseHistory</Link>
    <Link to={'/aboutus'}><i className="fa-regular fa-address-card"></i>AboutUs</Link>
    <Link to={'/contactus'}><i className="fa-solid fa-address-book"></i>ContactUs</Link>
    </nav>

    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/veg" element={<Veg/>}/>
      <Route path="/nonveg" element={<NonVeg/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/purchase" element={<PurchaseHistory/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;