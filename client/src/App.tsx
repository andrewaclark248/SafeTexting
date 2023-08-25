//import React from 'react';
import LoginForm from './components/login/LoginForm'
import LoginLayout from './components/layouts/LoginLayout'
import ResetPassword from './components/login/ResetPassword'
import RegisterUser from './components/login/RegisterUser';
import WithPrivateRoute from './components/auth/WithPrivateRoute';
import Home from './components/account/Home';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux';
import store from './redux/store'
import auth from "./config/firebase";
import { User } from "firebase/auth"

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
  const [currentUser, setCurrentUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  });




  //let persistor = persistStore(store);

  return (
    <Provider store={store}>
      
      <ThemeProvider theme={theme}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />} >
              <Route index element={<LoginForm />} />
              <Route path="create-account" element={<RegisterUser />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="home" element={
                <WithPrivateRoute>
                  <Home />
                </WithPrivateRoute>
              } />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>

  );
}





export default App;
