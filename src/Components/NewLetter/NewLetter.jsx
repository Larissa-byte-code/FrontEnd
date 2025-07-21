import React from "react";
import './NewLetter.css'
const NewLetter=() =>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offeers On Your Email</h1>
            <p>Suscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your email od"/>
                <button>Suscribe</button>
            </div>
        </div>
    )
}
export default NewLetter

