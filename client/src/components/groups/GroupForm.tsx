import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



function GroupForm() {


    return (
        
        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>

                </Grid>
            </CardContent>

            

        </Card>
    )
}

export default GroupForm;