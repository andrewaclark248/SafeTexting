import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import auth from "./../../config/firebase";
import ResetPassword from './ResetPassword'

function Profile(props: any) {
    const user = auth.currentUser?.email

    console.log("user", user)
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h5" component="h2">
                User: {user}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <ResetPassword />
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={8}>
        </Grid>
      </Grid>
  
    );
  }
  
  
  
  
  
  export default Profile;
  