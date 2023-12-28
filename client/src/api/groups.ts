import auth from "./../config/firebase";
import env from "react-dotenv";
import axios from 'axios';


export async function GetGroups() {

    env.SAFE_TEXTING_API_URL
    //auth.currentUser    

    let result = await axios({
                            method: 'post',
                            url: '/api/user',
                            data: {
                            email: 'randemail'
                            }
                        });

    console.log("api result = ", result)

} 
