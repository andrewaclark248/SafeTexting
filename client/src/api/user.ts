import axios from 'axios';
import { User } from "firebase/auth"

export async function CreateUser(currentUser: User, email: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/users',
                                data: {
                                    name: email
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result


} 
