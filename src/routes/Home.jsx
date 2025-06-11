import React from "react";
import CalculadoraMedia from "../components/CalculadoraMedia";
import ChamadaAtual from "../components/ChamadaAtual";

const Home = () => {
  return (
    <div className="text-center" style={{ fontFamily: 'fantasy', color: 'darkgreen' }}>
      <div>
        <h1>Estimativa de Tempo Médio de Espera:</h1>
        <div
          className="d-flex justify-content-center mt-5 p-3"
          style={{
            fontSize: 'large',
            width: '30vh',
            margin: 'auto',
            backgroundColor: 'rgb(211, 255, 228)',
            border: '4px solid darkgreen',
            borderRadius: '20px'
          }}
        >
          <div id="main_counterContainer">
            <p>A estimativa de espera é de:</p>
            <p id="valorEstimativa" style={{ fontSize: '40pt', fontWeight: '700', margin: 0 }}>
              <CalculadoraMedia />
            </p>
            <p>Minutos</p>
          </div>
        </div>
        <ChamadaAtual />
      </div>
    </div>
  );
};

export default Home;
