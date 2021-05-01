import React from "react";
import ResponseManager from "./components/ResponseManager";
import styled from "styled-components";
import "./style.css";

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const TextLogo = styled.h1`
  text-align: center;
  color: #7400b8;
  font-weight: 800;
  margin: 0;
`;

const SubTextLogo = styled.h3`
  text-align: center;
  color: #7400b8;
  font-weight: 300;
  margin: 0;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <TextLogo>Mocha pie</TextLogo>
        <SubTextLogo>control your mocked api behavior like a pro</SubTextLogo>
      </Header>
      <ResponseManager />
    </Container>
  );
};

export default App;
