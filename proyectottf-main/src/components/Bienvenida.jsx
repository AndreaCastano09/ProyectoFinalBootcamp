import React from 'react';
import { useNavigate } from 'react-router-dom';
import './global.scss';
import imagenFondo from '../aseets/pexels-pixabay-414837.jpg'; 


const Bienvenida = () => {
  const navigate = useNavigate();

  const irAPrincipal = () => {
    navigate('/principal');
  };

  return (
    
    <div className="bienvenida-container">
  <img src={imagenFondo} alt="Fondo" className="fondo-imagen" />
  
  <div className="bienvenida-overlay">
    <div className="bienvenida-content">
      <h1 className="bienvenida-titulo">Transición Energética Justa</h1>
      <p className="bienvenida-texto">Si cambias tu fuente de energía, cambiarás tu futuro</p>
      <button className="boton-empezar" onClick={irAPrincipal}>EXPLORA!</button>
    </div>
    <div className="bienvenida-footer">
      <p className="bienvenida-autor">Desarrollado por Andrea Castaño</p>
    </div>
  </div>
</div>
  );
};

export default Bienvenida;