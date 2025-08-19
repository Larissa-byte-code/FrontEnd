// App.jsx

import React from 'react';
import { Header, Footer, Sidebar } from './LayoutComponents';

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h2>Contenu principal</h2>
      </main>
      <Footer />
    </div>
  );
};

export default App;
