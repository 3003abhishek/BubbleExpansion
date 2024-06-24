import React from 'react';
import './Button.css';

const Button = ({ children, onClick, className }:{children:string|number,onClick?: ()=>void , className : String}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;