import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import './RelatedProduct.css'
export const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related products</h1>
        <hr/>
        <div className='relatedproduct-item'>
            {data_product.map((item,i)=>{
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}
export default RelatedProduct