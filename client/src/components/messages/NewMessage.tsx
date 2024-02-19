import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'


const NewMessage = (props: any) => {


    return (
        <Card variant="outlined" sx={{ marginTop: 10 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        No-Reply Messages
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default NewMessage;