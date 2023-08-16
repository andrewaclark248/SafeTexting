//import React from 'react';
import LoginForm from './components/login/LoginForm'
import LoginLayout from './components/layouts/LoginLayout'
import ResetPassword from './components/login/ResetPassword'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react'
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


function App(props: any) {
  return (

    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLayout />} >
            <Route index element={<LoginForm />} />
            <Route path="reset-password" element={<ResetPassword />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}





export default App;
