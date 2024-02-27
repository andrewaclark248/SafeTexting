import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PeopleForm from './PeopleForm'
import { useEffect } from 'react'
import { show } from './../../api/people'
import { useParams } from 'react-router-dom';
import { useState } from 'react'

const EditPerson = (props: any) => {
    const [person, setPerson] = useState<any>();
    let { id } = useParams();

    useEffect(() => {

        show(props.currentUser, id).then((data) => {
            setPerson(data.people);
        })
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Edit Person
                </Typography>
            </Grid>

            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <PeopleForm {...props} person={person} isEdit={true} />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    );
}

export default EditPerson;
