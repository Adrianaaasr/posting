import React from 'react';
import Background_black from '../Assets/Background_black.webp';

const FondoConImagen = ({children }) => {
  const estiloFondo = {
    backgroundImage: `url(${Background_black})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ajusta la altura para cubrir la pantalla completa
    /* Otros estilos de fondo personalizados aquí */
  };

  return (
    <div style={estiloFondo}>
      {children}
    </div>
  );
};

export default FondoConImagen;
