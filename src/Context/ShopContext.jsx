import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import './ShopContext.css'

export const ShopContext=createContext(null);
      
//ajout fonction getdefaultCart Initialisation du panier
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}
const ShopContextProvider =(props)=>{
    //Initialise le state cartItems avec un panier vide.
    const [cartItems,setCartItems]=useState(getDefaultCart());
    //On incrémente la quantité de l’item correspondant à itemId   
    const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    //Math.max(..., 0) évite des valeurs négatives
    const removeFromCart=(itemId)=>{
     setCartItems(prev => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    }
    const contextValue={
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider