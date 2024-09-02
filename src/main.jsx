// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar desde 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crear un root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
