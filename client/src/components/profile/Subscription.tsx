import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { GetPhones } from './../../api/phones'
import { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Circle from '@mui/icons-material/Circle';

function Subscription(props: any) {
    const [phones, setPhones] = useState<string[] | undefined>([]);

    useEffect(() => {
        GetPhones(props.currentUser).then((data) => {
            let numbers = data.numbers;
            setPhones(numbers);
        })
    }, []);

    console.log("numbers", phones)

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
                        <List>
                        {phones?.map((phone) => {

                            return (
                                <ListItem key={phone}>
                                    <ListItemAvatar>
                                        <Circle />
                                    </ListItemAvatar>
                                    <ListItemText primary={phone} />
                                </ListItem>
                            )
                        })}
                        </List>
                        <Button variant="contained">Get Phone #</Button>

                    </Grid>
                    
                </Grid>




            </CardContent>
        </Card>


  
    );
  }
  
  
  
  
  
  export default Subscription;
  
