import React from 'react';
import img404 from '../assets/404.png';

const Error = () => {
  return (
    <div className="container text-center" style={{ fontFamily: 'fantasy', color: 'green' }}>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img src={img404} alt="Não encontrado!" className="img-fluid" />
      </div>
      <div className="d-flex justify-content-center align-items-center mb-5">
        <h1 className="mt-4 fs-1">404 - Página não encontrada!</h1>
      </div>
    </div>
  );
};

export default Error;
