import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar=() => {
 const [menu,SetMenu]=useState("shop");
return(
    <div className="Navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{SetMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>{/*if menu=shop alors /hr sinon rien*/} 
            <li onClick={()=>{SetMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
       
        <div className="nav-login-cart">
            <button>Login</button>
            <div className="cart-wrapper">
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
            
        </div>
    </div>
    )
}   
export default Navbar