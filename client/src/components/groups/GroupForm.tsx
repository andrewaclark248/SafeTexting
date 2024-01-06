import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { CreateGroup } from './../../api/groups'
import { useState } from 'react'

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
    let [message, setMessage] = useState(createGroupMessage);


    const handleClick = async () => {
        try {
            await CreateGroup(props.currentUser, name)
            setMessage({show: true, text: "Successfully created your group!", severity: "success"})

        } catch {
            setMessage({show: true, text: "Error creating group.", severity: "error"})
        }
    }

    return (
        <>
        {message.show &&
            <Alert severity={message.severity}>{message.text}</Alert>
        }

        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Name" variant="outlined"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" onClick={handleClick}>
                            Create Group
                        </Button>
                    </Grid>

                </Grid>
            </CardContent>

            

        </Card>
        </>
    )
}

export default GroupForm;