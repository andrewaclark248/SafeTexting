import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function Messages(props: any) {

    return (
        <Grid container spacing={4} >
          <Grid item xs={10}>
            <Typography variant="h5" >
                Messages
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Link to="/messages/new" > 
                <Button variant="contained" color="secondary">
                    Send New Message
                </Button>
            </Link>
          </Grid>



          <Grid item xs={6}>
            <Card variant="outlined" sx={{ marginTop: 10 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            No-Reply Messages
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card variant="outlined" sx={{ marginTop: 10 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Reply Messages
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
          </Grid>


          <Grid item xs={6}>
            <Card variant="outlined" sx={{ marginTop: 10 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Conversation Messages
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
          </Grid>


        </Grid>

  
    );
  }
  
  
  
  
  
  export default Messages;
  
