import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import {useState} from 'react'
import Box from '@mui/material/Box'

function ResetPassword() {

    return (
        <Card variant="outlined" >
            <CardContent>

                <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                    Account
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        Reset Password
                        <Tooltip title="Reset Your Password" placement="top">
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6}>
                        <ResetPasswordModal />
                    </Grid>
                    <Grid item xs={6}>
                        Change Email
                        <Tooltip title="Change Your Email" placement="top">
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained">Change Email</Button>
                    </Grid>
                    <Grid item xs={6}>
                        Change Name
                        <Tooltip title="Change Your First/Last" placement="top">
                            <IconButton>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained">Change Name</Button>
                    </Grid>
                </Grid>
                </CardContent>
                <CardActions>
            </CardActions>  
        </Card>
    );
}

function ResetPasswordModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
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


    return (
      <div>
        <Button variant="contained"  onClick={handleOpen}>Reset Password</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Reset Password
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

export default ResetPassword;