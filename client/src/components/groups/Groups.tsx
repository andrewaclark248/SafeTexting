import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessibleTable from './GroupTable'

function Groups() {

    return (
        <Card variant="outlined" >
            <CardContent>

                <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                    Account
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        Reset Password

                    </Grid>
                </Grid>
                </CardContent>
        </Card>
    );
}

export default Groups;