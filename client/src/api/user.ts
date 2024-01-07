import axios from 'axios';
import { User } from "firebase/auth"

export async function CreateUser(currentUser: User, email: string, orgName: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/users',
                                data: {
                                    email: email,
                                    org_name: orgName
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result


} 
