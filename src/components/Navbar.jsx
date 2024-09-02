// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logoRitam from '../assets/Logo Ritam.png'; // Importar la imagen

function Navbar() {
  const navigate = useNavigate(); // Hook para manejar la navegación

  const handleContactClick = () => {
    navigate('/contacto'); // Navega a la página de Contacto
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <span>📍 Zamora, Michoacán. México</span>
        <span>🕒 Lun - sab 9.00 - 17.00 | Dom - Cerrado</span>
        <span>✉️ correo</span>
        <span>📸 Instagram</span>
      </div>
      <div className="navbar-main">
        <div className="logo">
          <img src={logoRitam} alt="Logo RITAM" /> {/* Usar la variable logoRitam */}
          <h1 className="navbar-title">RITAM</h1>
        </div>
        <nav>
          <Link to="/">INICIO</Link>
          <Link to="/nosotros">NOSOTROS</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contacto">CONTÁCTANOS</Link>
          <button className="contact-button" onClick={handleContactClick}>Escríbenos</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
