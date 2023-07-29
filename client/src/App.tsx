import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { Grid } from '@mui/material'
//import LoginForm from './components/login/LoginForm'
//import { createTheme, ThemeProvider, styled } from '@mui/material';
//import safeLoginsLogo from "./assets/safe-logins-logo.png"
//import safeTextingLogo from "./assets/safe-texting-logo.png"

/***const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#b71c1c",
    }
  }

});***/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}





export default App;
