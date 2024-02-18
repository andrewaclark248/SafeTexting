import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PhoneNumbers(props: any) {

    return (
        <Card variant="outlined" >
            <CardContent>

                <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
                    Phone Numbers
                </Typography>


            </CardContent>
        </Card>


  
    );
  }
  
  
  
  
  
  export default PhoneNumbers;
  
