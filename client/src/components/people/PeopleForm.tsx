import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { CreatePeople, update } from './../../api/people'
import { useState, useRef, useEffect } from 'react'
import MuiPhoneNumber from 'mui-phone-number';

import { useDispatch } from 'react-redux';
import { showMessage } from './../../redux/reducers/Alert';

import { useNavigate } from "react-router-dom";


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
    const buttonText = props.isEdit ? "Update Person" : "Create Person"
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("props?.person?.firstName = ", props?.person?.firstName)
        setFirstName(props?.person?.firstName)
        setLastName(props?.person?.lastName)
        setEmail(props?.person?.email)
        setPhoneNumber(props?.person?.phoneNumber)


    }, [props.person])

    const handleClick = async () => {
        try {
            // must have first or last name
            // must have email or phone number
            if ((firstName.length == 0 || lastName.length == 0) && (email.length == 0 || phoneNumber.length == 0) ) {
                //setMessage({show: true, text: "Must have First or Last Name & Phone Number or Email.", severity: "error"})
            } else {
                if (props.isEdit) {
                    await update(props.currentUser, props?.person?.id, firstName, lastName, phoneNumber, email)
                } else {
                    await CreatePeople(props.currentUser, firstName, lastName, phoneNumber, email)
                }
                navigate("/people");
                dispatch(showMessage({text: "Successfully created person.", severity: "success"}));

                //setMessage({show: true, text: "Successfully created your person!", severity: "success"})
            }


        } catch {
            //setMessage({show: true, text: "Error creating person.", severity: "error"})
        }
    }


    return (
        <>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" value={firstName ?? ""}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" value={lastName ?? ""}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" value={email ?? ""}
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
                            value={phoneNumber ?? ""}
                            onChange={(number: any)=> { setPhoneNumber(number) }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" onClick={handleClick}>
                            {buttonText}
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