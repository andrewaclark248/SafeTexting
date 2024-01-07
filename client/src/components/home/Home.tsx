import auth from "../../config/firebase";
import Typography from '@mui/material/Typography';



function Home(props: any) {
    
  
    return (
        <>
                <Typography variant="h5" component="h2">
                    Home: 
                </Typography>
                <Typography variant="h5" component="h2">
                    Email: <strong>{auth.currentUser?.email}</strong>
                </Typography>

        </>
    );
  }
  
  
  
  
  
  export default Home;
  