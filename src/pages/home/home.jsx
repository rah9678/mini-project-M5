
import Button from '../../components/button/Button.jsx';
import React from "react";
import './style.css'; 
import logo from '../../assets/logo.png';

import { useNavigate } from 'react-router-dom';


import './style.css'
import Header from '../../components/header/Header'


function Home() {
  const navigate = useNavigate();

  return (
      <>
         <Header />
        <div className="hero">
        <div className="hero-text">
          <h1>INSPIRAÇÕES NEGRAS API</h1>
          <p>Esta é uma Api que contém histórias de pesssoas negras.</p>
          <p>Se você conhece alguma, compartilhe!</p>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Black History Month" />
        </div>
      </div>




            
      </>
  );
}

export default Home