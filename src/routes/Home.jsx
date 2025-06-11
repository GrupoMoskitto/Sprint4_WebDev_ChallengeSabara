import React from "react";
import CalculadoraMedia from "../components/CalculadoraMedia";
import ChamadaAtual from "../components/ChamadaAtual";

const Home = () => {
  const handleReload = () => {
    window.location.reload();
  };

  const boxStyle = {
    fontSize: 'large',
    width: '30vh',
    margin: '40px auto 0',
    padding: '10px',
    backgroundColor: 'rgb(211, 255, 228)',
    border: '4px solid darkgreen',
    borderRadius: '20px'
  };

  return (
    <div className="text-center" style={{ fontFamily: 'fantasy', color: 'darkgreen' }}>
      <div>
        <h1 className="mt-5">Estimativa de Tempo Médio de Espera:</h1>

        {/* Estimativa */}
        <div className="d-flex justify-content-center mt-5 p-3" style={boxStyle}>
          <div id="main_counterContainer">
            <p>A estimativa de espera é de:</p>
            <p id="valorEstimativa" style={{ fontSize: '40pt', fontWeight: '700', margin: 0 }}>
              <CalculadoraMedia />
            </p>
            <p>Minutos</p>
          </div>
        </div>

        <div className="d-flex justify-content-center p-3" style={boxStyle}>
          <div>
            <p className="fw-bold">Texto de Chamada Atual:</p>
          </div>
          <ChamadaAtual />
        </div>

        <div className="mt-4">
          <button
            className="btn"
            onClick={handleReload}
            style={{
              color: 'darkgreen',
              backgroundColor: '#8eff94',
              padding: '10px 20px',
              fontSize: 'large',
              border: '2px solid green',
              borderRadius: '5px',
              transition: '0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'green';
              e.target.style.color = '#8eff94';
              e.target.style.border = '2px solid darkgreen';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#8eff94';
              e.target.style.color = 'darkgreen';
              e.target.style.border = '2px solid green';
            }}
          >
            Atualizar Página
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
