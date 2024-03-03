import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import { DeleteGroup as DeleteGroupApi } from './../../api/groups'
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { showMessage } from './../../redux/reducers/Alert';


type Message = {
  show: boolean | null
  text: string | null
  severity: any
}

const createMessage: Message  = {
  show: false,
  text: null,
  severity: "success"
}


const DeleteGroup = (props: any) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let [message, setMessage] = useState(createMessage);
    const dispatch = useDispatch();

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const handleDelete = async (destroy: boolean) => {
      if (destroy) {
        try {
          console.log("delete group", props.group)
          let result = await DeleteGroupApi(props.currentUser, props.group)
          handleClose()
          dispatch(showMessage({text: "Successfully deleted group.", severity: "success"}));
        } catch {
  
        }
      }

    }

    return (
        <>
          <Button onClick={handleOpen} variant="contained" color="secondary" >Delete</Button>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    Delete Group
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography id="keep-mounted-modal-description" sx={{ mt: 2, mb: 3 }}>
                    Are you sure want to delete group?
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                <Button onClick={handleClose} variant="contained" fullWidth>No</Button>

                </Grid>
                <Grid item xs={6}>
                  <Button onClick={() => handleDelete(true)} variant="contained" color="secondary" fullWidth>Yes</Button>
                </Grid>
              </Grid>


            </Box>
          </Modal>
        </>

    );


}

export default DeleteGroup;