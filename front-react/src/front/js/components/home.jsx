import React from 'react';
import '../../styles/index.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="welcome-container">
      <h1>¡Bienvenido a Nuestra Aplicación!</h1>
      <p>Por favor, selecciona una de las siguientes opciones para continuar.</p>
      <div className="button-container">
        <button className="button">
          <Link to="/registration_form" className="nav-link">Registrarse</Link>
        </button>
        <button className="ms-3 button secondary">
          <Link to="/users" className="nav-link">Usuarios Registrados</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;