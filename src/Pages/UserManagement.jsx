import React, { useEffect, useState } from "react";
import "./CSS/UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fonction pour charger les utilisateurs
  const fetchUsers = () => {
    fetch("http://localhost:5299/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Erreur chargement utilisateurs :", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Sélectionner un utilisateur
  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  // Modifier l'utilisateur
      const handleUpdate = () => {
        if (!selectedUser) return;
        if (!name || !email) {
          alert("Veuillez remplir tous les champs");
          return;
        }

        fetch(`http://localhost:5299/api/users/${selectedUser.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: selectedUser.id,   // ✅ Ajouté
            name: name,
            email: email,
            password: selectedUser.password // ✅ Optionnel si ton modèle le demande
          })
        })
          .then(res => {
            if (!res.ok) throw new Error("Erreur modification");
            return res.json();
          })
          .then(() => {
            alert("Utilisateur modifié !");
            fetchUsers();
            setSelectedUser(null);
            setName("");
            setEmail("");
          })
          .catch(err => alert(err.message));
      };


  // Supprimer l'utilisateur
  const handleDelete = () => {
    if (!selectedUser) return;

    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      fetch(`http://localhost:5299/api/users/${selectedUser.id}`, {
        method: "DELETE"
      })
        .then(res => {
          if (!res.ok) throw new Error("Erreur suppression");
          alert("Utilisateur supprimé !");
          fetchUsers();
          setSelectedUser(null);
          setName("");
          setEmail("");
        })
        .catch(err => alert(err.message));
    }
  };

  return (
    <div className="user-management">
      <div className="user-management-container">
        <h2>Gestion des utilisateurs</h2>

        <table className="user-table">
          <thead>
            <tr><th>Identifiant</th><th>Nom</th><th>@mail</th></tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} onClick={() => handleSelectUser(user)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="user-form">
          <h3>Modifier l’utilisateur</h3>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <button onClick={handleUpdate}>Modifier</button>
          <button onClick={handleDelete} className="delete">Supprimer</button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
