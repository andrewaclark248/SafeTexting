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
import React, { useState, useEffect, useMemo } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { GetGroups } from './../../api/groups'
import { CreateMessage } from './../../api/message'


type Group = { 
    name: string
    id: string
}

const NewMessage = (props: any) => {
    const [type, setType] = useState<string>('');
    const [groups, setGroups] = useState<Array<string>>([])
    const [selectedGroups, setSelectedGroups] = useState<any>([])
    const [message, setMessage] = useState<string>("")
    const [name, setName] = useState<string>("")

    useEffect(() => {
      GetGroups(props.currentUser).then((result) => {
        let groups = result.groups.map((group: Group) => group.name)
        setGroups(groups)
      }) 
    }, []);

    const handleSetType = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const sendMessage = async () => {
      let result = await CreateMessage(props.currentUser, name, type, selectedGroups, message);
      console.log("result ", result)
    }

    console.log("groups ", selectedGroups)


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
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type of Message</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type of Message"
                                    onChange={handleSetType}
                                >
                                    <MenuItem value={"Reply"}>Reply</MenuItem>
                                    <MenuItem value={"No-Reply"}>No-Reply</MenuItem>
                                    <MenuItem value={"Conversation"}>Conversation</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>

                          <Autocomplete
                            multiple
                            placeholder="Decorators"
                            options={groups}
                            value={selectedGroups}
                            onChange={(event, newValue) => {
                              console.log("newvalue = ", newValue)
                              setSelectedGroups([
                                ...newValue
                              ]);
                            }}

                            //defaultValue={[movies[0]]}
                            renderInput={(params) => (
                              <TextField {...params} label="Group" placeholder="Group" />
                            )}

                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            placeholder="Message"
                            multiline
                            fullWidth
                            rows={2}
                            maxRows={4}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                          />
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>


          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Button variant="contained" color="secondary" fullWidth onClick={sendMessage}>
              Send Message
            </Button>

          </Grid>
          <Grid item xs={2}></Grid>

        </Grid>



    );
}


  
  
  

export default NewMessage;


