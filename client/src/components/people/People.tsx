import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PeopleTable from './PeopleTable'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";


function People(props: any) {
    //const handle = (number) => {
    //    return number * number;
    //};
       

    return (

        <Grid container spacing={2}>
            <Grid item xs={11}>
                <Typography variant="h5" component="h2">
                    People
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Link to="/people/new" > 
                    <Button variant="contained" color="secondary">
                        Create Person
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <PeopleTable {...props} />
            </Grid>

        </Grid>


        

    );
}


export default People;