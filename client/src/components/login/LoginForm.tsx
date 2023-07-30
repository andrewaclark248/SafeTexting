
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import safeTextingLogo from './../../assets/safe-texting-logo.png'

function LoginForm() {
    return (
      <Card sx={{ borderRadius: 0, height: "100%" }} >

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Login
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
            </Grid>
          </Grid>



        </CardContent>
      </Card>
    );
  }
  
  export default LoginForm;
  

