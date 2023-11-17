import React from 'react';
import LoginForm from './components/login/LoginForm'
import LoginLayout from './components/layouts/LoginLayout'
import PrivateLayout from './components/layouts/PrivateLayout'
import ResetPassword from './components/login/ResetPassword'
import RegisterUser from './components/login/RegisterUser';
import Loading from './components/shared/Loading'

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
      main: "#e3f2fd",
    },
    background: {
      default: "#e4f0e2"
    },
    secondary: {
      main: "#b71c1c",
    }
  }

});


function App(props: any) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(true);
    });

    return unsubscribe;
  });


  console.log("currentUser ", currentUser)
  return (
    
      <React.Fragment>
      {loading &&
        <Provider store={store}>
          
          <ThemeProvider theme={theme}>

            <BrowserRouter>
                <Routes>

                  <Route path="/" element={<LoginLayout />} >
                    <Route index element={
                      currentUser ? <Navigate to='/home' /> : <LoginForm />  
                      } 
                    />
                    <Route path="create-account" element={<RegisterUser />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                  </Route>

                  <Route path="/home" element={<PrivateLayout currentUser={currentUser} />} >
                    <Route index element={
                        <Home />
                    } />
                  </Route>

                </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      }
    </React.Fragment>
  );
}

// if user logged in route to home
// if user not logged in route to /



export default App;
