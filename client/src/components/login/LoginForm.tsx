
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { Link, useNavigate, Navigate } from "react-router-dom";
import './../../styles/styles.css'
import { loginUser } from './../../redux/reducers/AuthUser';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./../../config/firebase";


function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authObject = useSelector((state: any) => state.auth);
  //const authentication = getAuth();




  const  handleLogin = async() => {
    try {
      let result = await signInWithEmailAndPassword(auth, username, password);
      //let token = await result.user.getIdToken();
      //localStorage.setItem("safeTextingToken", token);

      navigate("/home");

      //dispatch(loginUser(user));

    } catch (err){
      alert("login failed")
      console.error(err);
    }

  }


    return (
      <Card sx={{ borderRadius: 0, height: "100%" }} >

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Login
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
                fullWidth 
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                fullWidth 
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="secondary" 
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
              }}>
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link to="reset-password">
                  Forget Your Password?
              </Link>
            </Grid>
            <Grid item xs={12}>

              <Link to="create-account">
                  Create Your Account
              </Link>
            
            </Grid>
            <Grid item xs={12}>

              <Link 
                to="create-account" 
              >
                  Test Link
              </Link>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
  



  export default LoginForm;
  

