import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessibleTable from './GroupTable'
import GroupTable from './GroupTable'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Groups() {
    //const handle = (number) => {
    //    return number * number;
    //};
       

    return (

        <Grid container spacing={2}>
            <Grid item xs={11}>
                <Typography variant="h5" component="h2">
                    Groups
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Link to="/groups/new" > 
                    <Button variant="contained" color="secondary">
                        Create Group
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <GroupTable/>
            </Grid>

        </Grid>


        

    );
}


export default Groups;