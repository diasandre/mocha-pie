import React from "react";
import ResponseManager from "./components/ResponseManager";
import "./style.css";
import { GiCoffeeMug } from "react-icons/gi";
import { Container, Header, SubTextLogo, TextLogo } from "./styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7400b8",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <TextLogo>
            Mocha pie <GiCoffeeMug />
          </TextLogo>
          <SubTextLogo>take control of your api behavior</SubTextLogo>
        </Header>
        <ResponseManager />
        <ToastContainer
          position="bottom-left"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
      >
    </ThemeProvider>
  );
};

export default App;
