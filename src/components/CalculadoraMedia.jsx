import React, { useState, useEffect, useDeferredValue } from 'react';
import jsonData from '../data/ultimosPacientes.json';

const CalculadoraMedia = () => {
  const [media, setMedia] = useState(0);
  localStorage.setItem('jsonData_localStorage', JSON.stringify(jsonData));
  const jsonData_localStorage = JSON.parse(localStorage.getItem('jsonData_localStorage'));

  useEffect(() => {
    let total = 0;
    jsonData_localStorage.UltimosPacientes.forEach(paciente => {
        total += paciente.lenUltimaSessao;
    });

    const mediaCalculada = Math.round(total / jsonData_localStorage.UltimosPacientes.length);
    setMedia(mediaCalculada);
  }, []);

  return (
    <div>
      <p id='valorEstimativa'>{media}</p>
    </div>
  );
};

export default CalculadoraMedia;
