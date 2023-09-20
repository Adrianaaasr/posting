import React from 'react';
import './Gratefull.css';
import Layout from './Layout';
import background_general from '../Assets/Background general-min.webp';
import flecha from '../Assets/Boton flecha-min.webp'
import { Link } from 'react-router-dom';

const Gratefull = () => {
    return (
    <div>
         <Layout showMenu={true} showLogo={true} /> 
            <img width='1420px' className="background_general" src={background_general} alt="background_general" /> 
            
        <div className='txt_thanks'>
                <p className='thanks' >¡Gracias!</p>  
                <p className="message-thanks"> Nos pondremos en contacto contigo </p>
       
        <Link className='link_home' to="/">
            <p className='text_home'> Inicio </p>
            <img  width='20px' height= '20px' className="flecha" src={flecha} alt="flecha" /> 
        </Link>
        </div>
    </div>
    );
};

export default Gratefull;