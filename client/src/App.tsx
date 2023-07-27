import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material'
import LoginForm from './components/login/LoginForm'
import { createTheme, ThemeProvider, styled } from '@mui/material';
import safeLoginsLogo from "./assets/safe-logins-logo.png"

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

        <Grid container spacing={0} sx={{ mt: 10 }} >
          <Grid item xs={1}>
            xs=8
          </Grid>
          <Grid item xs={5}>
            <img src={safeLoginsLogo} style={{ width: "100%", height: "auto" }}/>
          </Grid>
          <Grid item xs={5}>
            <LoginForm />
          </Grid>
          <Grid item xs={1}>
            xs=4
          </Grid>

        </Grid>

      </div>

    </ThemeProvider>
  );
}





export default App;
