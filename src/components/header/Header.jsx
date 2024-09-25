import React from "react";
import './style.css'; 
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-bar">
          <ul className="nav-items">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/register">CADASTRO</Link></li>
            <li><Link to="/pesquisar">PESQUISAR</Link></li>
            <li><Link to="/reference">REFERÊNCIAS</Link></li>
            <li><Link to="/sobre">SOBRE</Link></li>
            <li className="social-icons">
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
            </li>
          </ul>
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
        </nav>
      </header>
      <div style={{ height: '150px' }}></div>
    </>
  );
};

export default Header;
