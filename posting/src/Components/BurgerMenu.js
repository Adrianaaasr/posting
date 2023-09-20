import React, { useState } from 'react';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className="menu-items">
          <li>
            <Link className="list" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="list" to="/Contact">Contacto</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
