import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material'
import LoginForm from './components/login/LoginForm'
import { createTheme, ThemeProvider, styled } from '@mui/material';
import safeLoginsLogo from "./assets/safe-logins-logo.png"
import safeTextingLogo from "./assets/safe-texting-logo.png"

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#b71c1c",
    }
  }

});


function App() {
  return (
    <ThemeProvider theme={theme}>

      <div >



      </div>

    </ThemeProvider>
  );
}





export default App;
