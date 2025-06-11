import React from "react";
import { HomeContainer, CounterContainer } from "../styles/HomeStyled";
// import carregarScript from "../components/CalculadoraMedia";
import CalculadoraMedia from "../components/CalculadoraMedia";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <h1>Estimativa de Tempo Médio de Espera:</h1>
        <CounterContainer>
          <div id="main_counterContainer">
            <p>A estimativa de espera é de:</p>
            {/* <p id="valorEstimativa">{contadorNull}</p> */}
            <CalculadoraMedia />
            <p>Minutos</p>
          </div>
        </CounterContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
