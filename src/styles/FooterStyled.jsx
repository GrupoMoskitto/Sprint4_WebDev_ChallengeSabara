import styled from "styled-components";

export const FooterContainer = styled.footer`
  font-family: fantasy;
  background-color: #8EFF94;
  color: darkgreen;
  padding: 20px 0;
  margin-top: auto;
  border-radius: 25px;
  position: fixed;
  width: 99.2%;
  bottom: 0;
  margin-bottom: 5px;

`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    color: #012619;
    text-decoration: none;
  }
`;