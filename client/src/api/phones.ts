

import axios from 'axios';
import { User } from "firebase/auth"


export async function SearchPhones(currentUser: User, phoneNumber: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/phones/search',
                                data: {
                                    phoneNumber: phoneNumber
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 
