import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetPeople } from './../../api/people'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import DeletePerson from './DeletePerson'
import Modal from '@mui/material/Modal';


type People = { 
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

export default function PeopleTable(props: any) {
  const [people, setPeople] = useState<Array<People>>([])

  useEffect(() => {
    GetPeople(props.currentUser).then((result) => {
        setPeople(result.people)
    }) 
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((row) => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.lastName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.phoneNumber}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to="/groups/new" > 
                  <Button variant="contained">
                      Edit
                  </Button>
                </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                <DeletePerson people={row} {...props} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


