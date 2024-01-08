import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react'
import { GetGroupPeople } from '../../api/groupPeople'
import { useParams } from 'react-router';


type People = { 
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
  }

function AddPeopleTable(props: any) {
    const [peopleInGroup, setPeopleInGroup] = useState<Array<People>>([])
    const [peopleNotInGroup, setPeopleNotInGroup] = useState<Array<People>>([])
    const params = useParams();

    useEffect(() => {
        GetGroupPeople(props.currentUser, params.id, true).then((result) => {
            setPeopleNotInGroup(result.people)
        }) 
        GetGroupPeople(props.currentUser, params.id).then((result) => {
            setPeopleInGroup(result.people)
        }) 

      }, []);
    

    return (
        <>
            <Grid item xs={6}>
                <Typography variant="h6" component="h2">
                    People In Group
                </Typography>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {peopleInGroup.map((row) => (
                            <TableRow key={row.firstName}>
                                <TableCell component="th" scope="row">
                                    {`${row.firstName} ${row.lastName}`}
                                </TableCell>
                                <TableCell component="th" scope="row">

                                </TableCell>
                                <TableCell component="th" scope="row">

                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>


            <Grid item xs={6}>
                <Typography variant="h6" component="h2">
                    People Not In Group
                </Typography>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {peopleNotInGroup.map((row) => (
                            <TableRow key={row.firstName}>
                                <TableCell component="th" scope="row">
                                    {`${row.firstName} ${row.lastName}`}
                                </TableCell>
                                <TableCell component="th" scope="row">

                                </TableCell>
                                <TableCell component="th" scope="row">

                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    );
}


export default AddPeopleTable;