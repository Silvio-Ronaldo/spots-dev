import React from 'react';

import './App.css'; // Importando o css do App

import logo from './assets/logo.svg'; // Importando a logo

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;