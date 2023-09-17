import React from 'react';
import './Error.css';
import background_general from '../Assets/Background general-min.webp';
import flecha from '../Assets/Boton flecha-min.webp'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <img width='1420px' className="background_general" src={background_general} alt="background_general" /> 
      <div className='txt_error'>
          <div className='txt_general_error'>
            <p className='message404' >Error 404</p>  
            <p className="error-message"> Página no encontrada</p>
          </div>
          <Link className='link_home' to="/">
                <p className='text_home'> Inicio </p>
                <img     width='20px' height= '20px' className="flecha" src={flecha} alt="flecha" /> 
          </Link>
      </div>
    </div>
  );
};

export default Error;
