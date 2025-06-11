import styled from "styled-components";

export const AdminContainer = styled.body`
    text-align: center;
    font-family: fantasy;
    color: darkgreen;
    
    button {
        color: darkgreen;
        text-decoration: none;
        padding: 5px 10px;
        font-size: large;
        background-color: #8eff94;
        padding: 10px;
        border: 2px solid green;
        border-radius: 5px;
        transition: 0.3s;
        margin-right: 10px;
    }

    button:hover {
        background-color: gray;
        color:rgb(213, 252, 215);
        border: 2px solid darkgray;
        cursor: not-allowed;
    }

    // button {
    //     color: darkgreen;
    //     text-decoration: none;
    //     padding: 5px 10px;
    //     font-size: large;
    //     background-color: #8eff94;
    //     padding: 10px;
    //     border: 2px solid green;
    //     border-radius: 5px;
    //     transition: 0.3s;
    //     margin-right: 10px;
    // }

    // button:hover {
    //     background-color: green;
    //     color: #8eff94;
    //     border: 2px solid darkgreen;
    // }
`;