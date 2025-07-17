import React from "react";
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import monImage3 from '../Assets/monImage3.png'
const Hero=() =>{
    return(
        <div className="hero">
            <div className="hero-left">
            <h2>NEEW ARRIVALS ONLY</h2>
            <div>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>Collection</p>
                    <p>for everyone</p>
                </div>
                <div>
                    <div className="hero-latest-btn">
                       <div>Latest Collection</div> 
                       <img src={arrow} alt=""/>
                    </div>
                </div>
            </div>
            </div>
            <div className="hero-right">
                {/*<img src={hero_image} alt=""/>*/}
                <img src={monImage3} alt=""/>
            </div>
        </div>
    )
}
export default Hero
