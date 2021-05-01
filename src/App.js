import React from "react";
import ResponseManager from "./components/ResponseManager";
import styled from "styled-components";
import "./style.css"

const TextLogo = styled.h1`
  text-align: center;
  color: #7400b8;
  font-weight: 800;
`;

const App = () => {
  return (
    <>
      <TextLogo>Mocha pie</TextLogo>
      <ResponseManager />
    </>
  );
};

export default App;
