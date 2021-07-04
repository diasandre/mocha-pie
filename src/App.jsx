/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './style.css';
import { GiCoffeeMug } from 'react-icons/gi';
import { ToastContainer } from 'react-toastify';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container, Header, SubTextLogo, TextLogo } from './styles';
import ResponseManager from './components/ResponseManager';

import 'react-toastify/dist/ReactToastify.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7400b8',
    },
  },
});

const App = () => (
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
  </ThemeProvider>
);

export default App;
