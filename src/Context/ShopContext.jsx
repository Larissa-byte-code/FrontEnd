import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'
import './ShopContext.css'

export const ShopContext=createContext(null);
const ShopContextProvider =(props)=>{
        const contextValue={all_product}
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider