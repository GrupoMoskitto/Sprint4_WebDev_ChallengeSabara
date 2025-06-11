import styled from "styled-components";

export const HomeContainer = styled.body`
    text-align: center;
    font-family: fantasy;
    color: darkgreen;
`;

export const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: large;
    // height: 40vh;
    width: 30vh;
    margin: auto;
    margin-top: 50px;
    padding: 10px 10px 10px 10px;
    background-color:rgb(211, 255, 228);
    border: 4px solid darkgreen;
    border-radius: 20px;

    #valorEstimativa {
    margin: 0;
    font-size: 40pt;
    font-weight: 700;
    }
`;