import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link to="/" className="me-5 navbar-brand">Mi Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/registration_form" className="nav-link">Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">Usuarios Registrados</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;