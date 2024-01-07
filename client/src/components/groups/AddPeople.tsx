import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import GroupsTable from './GroupTable'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";

function AddPeople(props: any) {

       

    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Add People To: 
                </Typography>
            </Grid>

            <Grid item xs={6}>
                People In Group
            </Grid>
            <Grid item xs={6}>
                People Not In Group
            </Grid>

        </Grid>


        

    );
}


export default AddPeople;