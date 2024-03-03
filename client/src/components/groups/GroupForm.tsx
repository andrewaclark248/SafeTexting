import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { CreateGroup, UpdateGroup } from './../../api/groups'
import { useState, useEffect } from 'react'

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

function GroupForm(props: any) {
    let [name, setName] = useState("");
    const buttonText = props.isEdit ? "Update Group" : "Create Group"
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("group = ", props?.group?.name)
        setName(props?.group?.name)


    }, [props.group])

    const handleClick = async () => {
        try {
            // must have first or last name
            // must have email or phone number
            if ((name.length == 0) ) {
            } else {
                if (props.isEdit) {
                    await UpdateGroup(props.currentUser, props?.group?.id, name)
                } else {
                    await CreateGroup(props.currentUser, name)
                }
                navigate("/groups");
                dispatch(showMessage({text: "Successfully created group.", severity: "success"}));

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
                        <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" value={name ?? ""}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/>
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

export default GroupForm;