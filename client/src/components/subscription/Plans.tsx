import Grid from '@mui/material/Grid';
import Gold from './Gold'
import Bronze from './Bronze'

function Plans(props: any) {

    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
            <Gold />
        </Grid>
        <Grid item xs={6}>
            <Bronze />
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
        </Grid>
      </Grid>
  
    );

}

export default Plans;