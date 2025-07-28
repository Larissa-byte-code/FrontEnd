import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import './ShopContext.css'

export const ShopContext=createContext(null);
      
//ajout fonction getdefaultCart Initialisation du panier
const getDefaultCart=()=>{
    let cart={};
    for (let i = 1; i <= all_product.length; i++) {
        cart[i]=0;
        
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
    const getTotalCartAmount= ()=>{
        let totalAmount=0;
        //parcourir les clés,l'Id
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                //On cherche dans all_product le produit dont l'id correspond à la clé item
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                //quantité (cartItems[item])
                //prix unitaire (itemInfo.new_price)
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
            
        }
        return totalAmount;
    };
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
               totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }


    const contextValue={
        getTotalCartItems,
        getTotalCartAmount,
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