import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GroupsTable from './GroupTable'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import AddPeopleTable from './AddPeopleTable'
function AddPeople(props: any) {

       

    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Add People To: 
                </Typography>
            </Grid>
            <AddPeopleTable />

        </Grid>


        

    );
}


export default AddPeople;