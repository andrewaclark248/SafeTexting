import { Card, 
  CardContent, 
  Typography, 
  CardActions, 
  Button,
  TextField,
  Grid,
} from '@mui/material'



function LoginForm() {
    return (
      <Card sx={{  }}>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Login
          </Typography>

          <Grid container spacing={0} sx={{ mt: 5 }} >
            <Grid item xs={12}>
              <TextField label={'Username'} id="margin-dense" margin="dense" fullWidth/>
            </Grid>
          </Grid>
          <Grid container spacing={0}  >
            <Grid item xs={12}>
              <TextField label={'Password'} id="margin-dense" margin="dense" fullWidth/>
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{ mt: 5 }} >
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Login</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }} >
            <Grid item xs={6}>
              <Button variant="contained" color="error" fullWidth>SignUp</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="error" fullWidth>Forget Your Creds?</Button>
            </Grid>
          </Grid>


        </CardContent>
      </Card>
    );
  }
  
  export default LoginForm;
  

