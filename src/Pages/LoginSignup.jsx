
import React from "react";
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup=() =>{
    const navigate = useNavigate();

    const handleLogin = () => {
  // Tu peux ajouter une vraie vérification ici plus tard
  // Exemple simple : si les champs sont remplis, on redirige
    navigate("/");
};

    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Login </h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Adress"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button onClick={handleLogin}>Continue</button>

                <p className="loginsignup-login">  Don’t have an account? <Link to="/signup">Sign up here</Link></p>

                
            </div>
        </div>
    )
}
export default LoginSignup