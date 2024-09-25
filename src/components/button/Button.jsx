import React from "react";
import './style.css'; 


const Button = ({ text, handleClick, styleType }) => {
  return (
    <button className={`button ${styleType}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
