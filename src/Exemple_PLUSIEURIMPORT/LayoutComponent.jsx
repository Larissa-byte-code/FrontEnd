// LayoutComponents.jsx

import React from 'react';

export const Header = () => {
  return (
    <header style={{ background: '#eee', padding: '10px' }}>
      <h1>Bienvenue sur notre site</h1>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer style={{ background: '#ddd', padding: '10px' }}>
      <p>&copy; 2025 JM-Contacts. Tous droits réservés.</p>
    </footer>
  );
};

export const Sidebar = () => {
  return (
    <aside style={{ background: '#f4f4f4', padding: '10px' }}>
      <ul>
        <li>Accueil</li>
        <li>Produits</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
};
