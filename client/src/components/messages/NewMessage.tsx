import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { GetGroups } from './../../api/groups'

import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";


type Group = { 
    name: string
    id: string
}

const NewMessage = (props: any) => {
    const [type, setType] = useState<string>('');

    const [groups, setGroups] = useState<Array<Group>>([])

    useEffect(() => {
      GetGroups(props.currentUser).then((result) => {
        setGroups(result.groups)
      }) 
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    
    const MultiAutocomplete = () => {
        return (
          <Autocomplete
            sx={{ m: 1, width: 500 }}
            multiple
            id="tags-standard"
            options={groups}
            getOptionLabel={(option) => <MenuItem/> as any }
            defaultValue={[groups[0], groups[1]]}
            disableCloseOnSelect
            renderOption={(props, option, { selected }) => (
              <MenuItem
                key={option.name}
                value={option.name}
                sx={{ justifyContent: "space-between" }}
                {...props}
              >
                {option.name}
                {selected ? <CheckIcon color="info" /> : null}
              </MenuItem>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Multiple Autocomplete"
                placeholder="Favorites"
              />
            )}
          />
        );
      };

    return (
        <Grid container spacing={4} >
          <Grid item xs={12}>
            <Typography variant="h5" >
                New Message
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>

          <Grid item xs={8}>

            <Card variant="outlined" sx={{ marginTop: 10 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type of Message</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type of Message"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Reply"}>Reply</MenuItem>
                                    <MenuItem value={"No-Reply"}>No-Reply</MenuItem>
                                    <MenuItem value={"Conversation"}>Conversation</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <MultiAutocomplete />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>



          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>



    );
}


  
  
  

export default NewMessage;


