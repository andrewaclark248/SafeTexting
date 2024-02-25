import auth from "./../config/firebase";
import env from "react-dotenv";
import axios from 'axios';
import { User } from "firebase/auth"


export async function CreateMessage(currentUser: User, name: string, type: string, groups: string[], message: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/message',
                                data: {
                                    name: name,
                                    type: type,
                                    groups: groups,
                                    message: message
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 
