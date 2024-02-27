import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PeopleForm from './PeopleForm'


function NewPeople(props: any) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Create Person
                </Typography>
            </Grid>

            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <PeopleForm {...props} />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    )


}

export default NewPeople;