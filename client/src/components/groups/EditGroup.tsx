import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GroupForm from './GroupForm'
import { useEffect } from 'react'
import { GetGroup } from './../../api/groups'
import { useParams } from 'react-router-dom';
import { useState } from 'react'

const EditPerson = (props: any) => {
    const [group, setGroup] = useState<any>();
    let { id } = useParams();

    useEffect(() => {

        GetGroup(props.currentUser, id).then((data) => {
            setGroup(data.group);
        })
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Edit Group
                </Typography>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <GroupForm {...props} group={group} isEdit={true} />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    );
}

export default EditPerson;
