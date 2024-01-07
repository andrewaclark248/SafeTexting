import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react'
//import { registerUser } from './../../utilities/Authentication'
import auth from "./../../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { CreateUser } from './../../api/user'
import { User } from "firebase/auth"


function RegisterUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [orgName, setOrgName] = useState("");

    const signIn = async (e:any) => {
        e.preventDefault();
        try {
          //create user in fireabse
          await createUserWithEmailAndPassword(auth, username, password);

          //user in database
          await CreateUser(auth.currentUser as User, username, orgName)
        } catch (err){
          console.error(err);
        }
      };


    return (
        <Card sx={{ borderRadius: 0, height: "100%" }} >

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Register User
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
              <TextField 
                id="outlined-basic" 
                label="Confirm Password" 
                variant="outlined" 
                fullWidth 
                onChange={(e) => {
                    setConfirmPassword(e.target.value)
                }}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                id="outlined-basic" 
                label="Organization Name" 
                variant="outlined" 
                fullWidth 
                onChange={(e) => {
                  setOrgName(e.target.value)
                }}
                />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="secondary" 
                fullWidth
                onClick={(e) => {
                    signIn(e);
                }}
                >Sign Up</Button>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
}

function handleLogin(username: string, password: string, e: any) {
    e.preventDefault();
    console.log("username = ", username)
    console.log("password = ", password)
/**    registerUser(username, password).then((data: any) =>{
        console.log("login success")
    }).catch((err: any) => {
        console.log("error", err)
        console.log("login failure")
    }); */
    //console.log("result", result)


    
}


export default RegisterUser;