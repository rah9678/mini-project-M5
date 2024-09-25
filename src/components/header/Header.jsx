import React from "react";
import './style.css'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/logoheader.png'




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
          </ul>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </nav>
      </header>
      <div style={{ height: '150px' }}></div>
    </>
  );
};

export default Header;
