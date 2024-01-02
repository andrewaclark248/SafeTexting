import auth from "./../config/firebase";
import env from "react-dotenv";
import axios from 'axios';
import { User } from "firebase/auth"


export async function CreateGroup(currentUser: User, name: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/groups',
                                data: {
                                    name: name
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token //the token is a variable which holds the token
                                }
                            });

    return result


} 
