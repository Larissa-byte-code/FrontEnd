
import React, { useState } from "react";
import './CSS/Signup.css'
import all_users from "../Components/Assets/LoginU";

const Signup=() =>{
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

    const userExists = all_users.some(user => user.email === email);
    if (userExists) {
      alert("Cet email est déjà utilisé");
      return;
    }

    const newUser = {
      id: all_users.length + 1,
      name,
      email,
      password,
      role: "client"
    };

    all_users.push(newUser); 
    alert("Inscription réussie !");
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