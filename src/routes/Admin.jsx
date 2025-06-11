import React from 'react';

const Admin = () => {
  const buttonStyle = {
    color: 'darkgreen',
    backgroundColor: '#8eff94',
    padding: '10px',
    fontSize: 'large',
    border: '2px solid green',
    borderRadius: '5px',
    transition: '0.3s',
    marginRight: '10px'
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = 'gray';
    e.target.style.color = 'rgb(213, 252, 215)';
    e.target.style.border = '2px solid darkgray';
    e.target.style.cursor = 'not-allowed';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '#8eff94';
    e.target.style.color = 'darkgreen';
    e.target.style.border = '2px solid green';
    e.target.style.cursor = 'default';
  };

  return (
    <div className="text-center" style={{ fontFamily: 'fantasy', color: 'darkgreen' }}>
      <div>
        <h1 style={{ fontSize: '30pt', fontStyle: 'oblique', color: 'green' }}>Disponível em breve!</h1>
        <h1>Painel de Administração</h1>
        <div className="my-3">
          <button
            className="btn"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Resetar para Valores Padrão
          </button>
          <button
            className="btn"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Adicionar o Último Atendimento
          </button>
          <button
            className="btn"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Desfazer
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h2>Taxa de atualização:</h2>
        <p>10 segundos</p>
      </div>
    </div>
  );
};

export default Admin;
