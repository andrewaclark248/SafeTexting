import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GroupForm from './GroupForm'


function NewGroup(props: any) {

    return (



        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Create Group
                </Typography>
            </Grid>

            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <GroupForm {...props} />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>



    )


}

export default NewGroup;