import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material'
import LoginForm from './login/LoginForm'

function App() {
  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs={1}>
        xs=8
      </Grid>
      <Grid item xs={5}>
        image
      </Grid>
      <Grid item xs={5}>
        <LoginForm />
      </Grid>
      <Grid item xs={1}>
        xs=4
      </Grid>

    </Grid>
  );
}

export default App;
