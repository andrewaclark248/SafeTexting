//import React from 'react';
import Grid from '@mui/material/Grid'
import LoginForm from './components/login/LoginForm'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
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

        <Grid container spacing={0} sx={{ mt: 10 }} >
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={5}>
            <img src={safeTextingLogo} style={{ width: "100%", height: "100%" }}/>
          </Grid>
          <Grid item xs={5}>
            <LoginForm />
          </Grid>
          <Grid item xs={1}>
          </Grid>

        </Grid>

      </div>

    </ThemeProvider>
  );
}





export default App;
