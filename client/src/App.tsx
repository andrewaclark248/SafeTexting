import React from 'react';
import LoginForm from './components/login/LoginForm'
import LoginLayout from './components/layouts/LoginLayout'
import PrivateLayout from './components/layouts/PrivateLayout'
import ResetPassword from './components/login/ResetPassword'
import RegisterUser from './components/login/RegisterUser';
import Loading from './components/shared/Loading'
import Profile from './components/profile/Profile'
import Home from './components/home/Home';
import Groups from './components/groups/Groups';
import NewGroup from './components/groups/NewGroup'
import People from './components/people/People';
import NewPeople from './components/people/NewPeople';
import AddPeople from './components/groups/AddPeople';
import Plans from './components/subscription/Plans'
import Numbers from './components/subscription/Numbers'

import './api/axios'


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
  const [token, setToken] = useState<string | undefined>("");
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(true);
    });

    return unsubscribe;
  });


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
                  <Route path="/profile" element={<PrivateLayout currentUser={currentUser} />} >
                    <Route index element={
                        <Profile currentUser={currentUser}  />
                    } />
                  </Route>
                  <Route path="/groups" element={<PrivateLayout currentUser={currentUser} />} >
                    <Route index element={
                      <Groups currentUser={currentUser}  />
                    } />


                    <Route path="new" element={<NewGroup currentUser={currentUser} />} />
                    <Route path=":id/people" element={<AddPeople currentUser={currentUser} />} />


                  </Route>

                  <Route path="/people" element={<PrivateLayout currentUser={currentUser} />} >
                    <Route index element={
                      <People currentUser={currentUser}  />
                    } />


                    <Route path="new" element={<NewPeople currentUser={currentUser} />} />


                  </Route>

                  <Route path="/subscription" element={<PrivateLayout currentUser={currentUser} />} >
                    <Route index element={
                      <Plans currentUser={currentUser}  />
                    } />
                    <Route path="payment" element={<NewPeople currentUser={currentUser} />} />
                    <Route path="numbers/:plan" element={<Numbers currentUser={currentUser} />} />
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
