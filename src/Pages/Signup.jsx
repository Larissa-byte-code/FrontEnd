
import React, { useState } from "react";
import './CSS/Signup.css'
import { useNavigate } from 'react-router-dom';
const Signup=() =>{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
     const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Tous les champs sont obligatoires");
      return;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    if (!agree) {
      alert("Vous devez accepter les conditions");
      return;
    }

    // Envoi vers ASP.NET API
  fetch("http://localhost:5299/api/users/Signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role: "client"
    })
  })
  .then(res => {
    if (!res.ok) {
      return res.text().then(text => { throw new Error(text); });
    }
    return res.text();
  })
  .then(msg => {
    alert(msg);
    navigate("/"); 
  })
  .catch(err => {
    alert("Erreur : " + err.message);
  });
};
     return (
    <div className="Signup">
      <div className="Signup-container">
        <h1>Sign Up</h1>
        <div className="Signup-fields">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup}>To validate</button>
        <div className="Signup-agree">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;