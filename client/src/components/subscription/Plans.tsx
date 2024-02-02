import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Plans(props: any) {

    return (
        <>


            <Card variant="outlined" >
                <CardContent>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                Subscriptions
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 12, fontWeight: "bold" }} color="text.primary" gutterBottom>
                                Gold
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained">Purchase Gold</Button>
                        </Grid>
                    </Grid>




                </CardContent>
            </Card>


        </>
    );

}

export default Plans;