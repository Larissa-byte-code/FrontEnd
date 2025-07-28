import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItems = () => {
    const {all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            console.log("id:", e.id, "quantity:", cartItems[e.id]);
            if(cartItems[e.id]>0)
            {
                //React a besoin d’une key pour chaque élément retourné dans un .map().
                return <div key={e.id}>
                            <div className='cartitems-format'>
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                            </div>
                            <hr/> 
                        </div>
            }
        })}
    </div>
  )
}
export default CartItems
