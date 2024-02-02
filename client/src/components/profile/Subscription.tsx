import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function Subscription(props: any) {

    return (
        <Card variant="outlined" >
            <CardContent>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                            Subscription: Gold
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>

                        <Link to="/subscription" > 
                            <Button variant="contained" color="secondary">
                            Update Subscription
                            </Button>
                        </Link>

                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: 12, fontWeight: "bold" }} color="text.primary" gutterBottom>
                            Phone Numbers
                        </Typography>

                        

                        <Button variant="contained">Get Phone #</Button>

                    </Grid>
                    
                </Grid>




            </CardContent>
        </Card>


  
    );
  }
  
  
  
  
  
  export default Subscription;
  
