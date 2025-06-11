import styled from "styled-components";

export const HeaderContainer = styled.header`
    font-family: fantasy;
    background: rgb(91, 250, 99);
    padding: 20px;
    display: flex;
    border-radius: 25px;
    justify-content: space-around;
    align-items: center;
`;
export const Nav = styled.nav `
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }

    li{
        margin: 0 15px;
    }

    a{
        display: flex;
        color: darkgreen;
        text-decoration: none;
        padding: 5px 10px;
        font-size: large;
        background-color: #8eff94;
        padding: 10px;
        border: 2px solid green;
        border-radius: 5px;
        transition: 0.3s;
    }

    a:hover {
        background-color: green;
        color: #8eff94;
        border: 2px solid darkgreen;
    }

    img {
        background-color: #8eff94;
        border: 2px solid green;
        padding: 10px;
        border-radius: 20px;
    }
    
`