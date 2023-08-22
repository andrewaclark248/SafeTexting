//import React from 'react';
import LoginForm from './components/login/LoginForm'
import LoginLayout from './components/layouts/LoginLayout'
import ResetPassword from './components/login/ResetPassword'
import RegisterUser from './components/login/RegisterUser';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react'
import { Provider } from 'react-redux';
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

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

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginLayout />} >
                <Route index element={<LoginForm />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="create-account" element={<RegisterUser />} />

              </Route>
            </Routes>
          </BrowserRouter>

        </ThemeProvider>
      </PersistGate>
    </Provider>

  );
}





export default App;
