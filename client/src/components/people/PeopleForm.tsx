import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { CreatePeople } from './../../api/people'
import { useState, useRef } from 'react'
import MuiPhoneNumber from 'mui-phone-number';

type Message = {
    show: boolean | null
    text: string | null
    severity: any
}

const createGroupMessage: Message  = {
    show: false,
    text: null,
    severity: "success"
}

function PeopleForm(props: any) {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let [message, setMessage] = useState(createGroupMessage);


    const handleClick = async () => {
        try {

            await CreatePeople(props.currentUser, firstName, lastName, phoneNumber, email)
            setMessage({show: true, text: "Successfully created your person!", severity: "success"})

        } catch {
            setMessage({show: true, text: "Error creating person.", severity: "error"})
        }
    }

    console.log("phoneNumber = ", phoneNumber)

    return (
        <>
        {message.show &&
            <Alert severity={message.severity}>{message.text}</Alert>
        }

        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <MuiPhoneNumber
                            fullWidth
                            label="Phone Number" 
                            variant="outlined"
                            defaultCountry={'us'}
                            onlyCountries={['us']}
                            disableDropdown={true}
                            onChange={(number: any)=> { setPhoneNumber(number) }}
                        />


                    </Grid>


                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" onClick={handleClick}>
                            Create Person
                        </Button>
                    </Grid>

                </Grid>
            </CardContent>

            

        </Card>
        </>
    )
}

//setPhoneNumber(event.target.value)

export default PeopleForm;