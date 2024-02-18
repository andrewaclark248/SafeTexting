import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import auth from "./../../config/firebase";
import ResetPassword from './ResetPassword'
import PhoneNumbers from './PhoneNumbers'
import Subscription from './Subscription'



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
        <Grid item xs={6}>
          <Subscription {...props} />
        </Grid>
        <Grid item xs={6}>
        </Grid>
      </Grid>
  
    );
  }
  
  
  
  
  
  export default Profile;
  