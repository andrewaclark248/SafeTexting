
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    children?: React.ReactNode
  }
  


function ResetPassword( {children}: Props )  {

    return (
        <>
            <Card sx={{ borderRadius: 0, height: "100%" }} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        Reset Password
                    </Typography>
                    <Button variant="outlined" color="secondary" fullWidth>Send Me A Reset Password Link?</Button>

                </CardContent>
            </Card>
        </>
    );
}


export default ResetPassword

