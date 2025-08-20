import React, { useState } from "react";
import './CSS/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
          if (!email || !password) {
            alert("Veuillez remplir tous les champs");
            return;
          }

          fetch("http://localhost:5299/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          })
            .then(res => {
              if (!res.ok) {
                return res.text().then(text => { throw new Error(text); });
              }
              return res.text();
            })
            .then(msg => {
              alert(msg); // "Bienvenue Larissa !"
              setIsLoggedIn(true);

              // ✅ Redirection selon l'adresse email
              if (email === "admin@gmail.com") {
                navigate("/UserManagement");
              } else {
                navigate("/"); 
              }
            })
            .catch(err => {
              alert("Erreur : " + err.message);
            });
        };



  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Continue</button>
        {isLoggedIn && (
          <button
            style={{ marginTop: "20px", backgroundColor: "#4CAF50", color: "white", fontSize: "18px", cursor: "pointer" }}
            onClick={() => navigate("/UserManagement")}
          >
            Accéder à la gestion des utilisateurs
          </button>
        )}
        <p className="loginsignup-login">Don’t have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default LoginSignup;
