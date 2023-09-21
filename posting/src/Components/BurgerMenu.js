import React, { useState, useEffect, useRef } from 'react';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event) => {
    // Verificar si el clic ocurrió fuera del menú
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agregar un controlador de eventos de clic al documento
    document.addEventListener('click', closeMenu);

    return () => {
      // Eliminar el controlador de eventos al desmontar el componente
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
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
