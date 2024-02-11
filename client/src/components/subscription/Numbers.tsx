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
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { SearchPhones } from './../../api/phones';
import { useParams } from 'react-router';
import Checkbox from '@mui/material/Checkbox';

function Numbers(props: any) {
    const [numbers, setNumbers] = useState<string[] | undefined>([]);
    const [error, setError] = useState<boolean>(false);
    const [areaCode, setAreaCode] = useState<string>("");
    const [subscription, setSubscription] = useState<number | undefined>();
    const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
    const params = useParams();

    const searchNumbers = async () => {
        SearchPhones(props.currentUser, areaCode).then((data) => {
            let numbers = data.numbers;
            setNumbers(numbers);
        })
    }

    useEffect(() => {
        let plan = params.plan;
        if(plan == "gold") {
            setSubscription(3)
        } else if (plan == "bronze") {
            setSubscription(2)
        } else {
            setSubscription(1)
        }
    }, []);
    

    const handleCheckBox = (number: string) => {
        let selected = selectedNumbers.includes(number);
    
        //uncheck: remove number from array
        if (selected) {
            setSelectedNumbers(selectedNumbers.filter(n => n !== number));
        } else { //check: add number to array
            setSelectedNumbers([...selectedNumbers, number])
        }
    
    }
    return (
        <>
            {error && 
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="error" sx={{marginBottom: 3}}>
                    Here is a gentle confirmation that your action was successful.
                </Alert>
            }

                <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>



                        <Card variant="outlined" >
                            <CardContent>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                           Choose Numbers
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField id="outlined-basic" label="Choose Area Code" variant="outlined" inputProps={{ maxLength: 3 }} 
                                            onChange={(e) => {
                                                setAreaCode(e.target.value);
                                            }}
                                        />
                                    </Grid>
                                        <Grid item xs={6}>
                                        <Button variant="contained" color="secondary" onClick={searchNumbers}>
                                            Search Numbers
                                        </Button>

                                    </Grid>
  


                                    
                                </Grid>
                            </CardContent>
                        </Card>




                    </Grid>
                    <Grid item xs={3}></Grid>

                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>

                        


                        <Card variant="outlined" >
                            <CardContent>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                            Subscription: Gold
                                        </Typography>
                                        <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
                                            Choose up to {subscription} numbers
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>

                                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                            {numbers?.map((number) => {
                                                return (
                                                    <ListItem key={number}>
                                                        <ListItemAvatar>
                                                        <Checkbox
                                                            disabled={disableCheckbox(selectedNumbers, number)}
                                                            onClick={(e) => { handleCheckBox(number)  }}
                                                         />

                                                        </ListItemAvatar>
                                                        <ListItemText primary={number} />
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={3}></Grid>

                    
                </Grid>


                </>
    );
  }
  
const disableCheckbox = (selectedNumbers: string[], number: string) => {
    if (selectedNumbers.length != 3) {
        return false
    }

    let selected = selectedNumbers.includes(number);
    if (selected) {
        return false
    } else {
        return true
    }

}


  
  
  export default Numbers;
  