
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


function LoginForm() {
    return (
      <Card sx={{ borderRadius: 0, height: "100%" }} >

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


        </CardContent>
      </Card>
    );
  }
  
  export default LoginForm;
  

