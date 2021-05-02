import React from "react";
import ResponseManager from "./components/ResponseManager";
import styled from "styled-components";
import "./style.css";
import { GiCoffeeMug } from "react-icons/gi";

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
  display: flex;
  align-items: center;
  justify-content: center;
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
        <TextLogo>
          Mocha pie <GiCoffeeMug />
        </TextLogo>
        <SubTextLogo>take control of your api behavior</SubTextLogo>
      </Header>
      <ResponseManager />
    </Container>
  );
};

export default App;
