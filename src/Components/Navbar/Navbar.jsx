import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar=() => {
 const [menu,SetMenu]=useState("shop");
 const {getTotalCartItems}=useContext(ShopContext);
return(
    <div className="Navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{SetMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>{/*if menu=shop alors /hr sinon rien*/} 
            <li onClick={()=>{SetMenu("mens")}}><Link  style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("womens")}}><Link  style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("kids")}}><Link  style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
       
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <div className="cart-wrapper">
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
            
        </div>
    </div>
    )
}   
export default Navbar