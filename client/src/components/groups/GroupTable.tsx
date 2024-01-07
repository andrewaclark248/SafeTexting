
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetGroups } from './../../api/groups'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


type Group = { 
  name: string
  id: string
}

export default function GroupsTable(props: any) {
  const [groups, setGroups] = useState<Array<Group>>([])

  useEffect(() => {
    GetGroups(props.currentUser).then((result) => {
      setGroups(result.groups)
    }) 
  }, []);
  console.log("groups = ", groups)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to="/groups/new" > 
                  <Button variant="contained">
                      Edit Group
                  </Button>
                </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`/groups/${row.id}/people`} > 
                  <Button variant="contained">
                      Add People To Group
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


