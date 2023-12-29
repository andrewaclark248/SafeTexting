import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { GetGroups } from './../../api/groups'
import { useState } from 'react'

function GroupForm(props: any) {
    let [name, setName] = useState("");


    const handleClick = async () => {
        let result = await GetGroups(props.currentUser, name)

        //console.log("result = ", result)
    }

    return (
        
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
    )
}

export default GroupForm;