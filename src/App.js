import React from "react";
import ResponseManager from "./components/ResponseManager";
import "./style.css";
import { GiCoffeeMug } from "react-icons/gi";
import { Container, Header, SubTextLogo, TextLogo } from "./styles";

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
