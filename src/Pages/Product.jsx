import React, { useContext } from "react";
import { useParams } from 'react-router-dom';//useParams() pour récupérer l’ID
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProducts/RelatedProduct";

const Product=() =>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId))
 
    return(
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
    )
}
export default Product
