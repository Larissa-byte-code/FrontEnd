import React from "react";
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item';

const NewCollections=() =>{
    return(
        <div className="newcollections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {new_collection.map((item,i)=>{
                    return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />

                    
                })}
            </div>
        </div>
    )
}
export default NewCollections

