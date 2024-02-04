import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Circle from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';



function Gold(props: any) {

    return (
        <Card variant="outlined" >
            <CardContent>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                            Subscription: Gold
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Circle />
                            </ListItemAvatar>
                            <ListItemText primary="Send Text Message"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Circle />
                            </ListItemAvatar>
                            <ListItemText primary="Send Emails"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Circle />
                            </ListItemAvatar>
                            <ListItemText primary="Recurring Messages" />
                        </ListItem>
                    </List>

                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">
                            Purchase Gold
                        </Button>
                    </Grid>
                    
                </Grid>
            </CardContent>
        </Card>


  
    );
  }
  
  
  
  
  
  export default Gold;
  