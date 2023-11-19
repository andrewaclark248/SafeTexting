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
                        <Button variant="contained">Reset Password</Button>
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

export default ResetPassword;