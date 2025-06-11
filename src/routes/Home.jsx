import React from "react";
import { HomeContainer, CounterContainer } from "../styles/HomeStyled";
import CalculadoraMedia from "../components/CalculadoraMedia";
import ChamadaAtual from "../components/ChamadaAtual";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <h1>Estimativa de Tempo Médio de Espera:</h1>
        <CounterContainer>
          <div id="main_counterContainer">
            <p>A estimativa de espera é de:</p>
            <CalculadoraMedia />
            <p>Minutos</p>
          </div>
        </CounterContainer>
        <ChamadaAtual/>
      </div>
    </HomeContainer>
  );
};

export default Home;
