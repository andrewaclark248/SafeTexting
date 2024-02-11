

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


export async function CreatePhone(currentUser: User, phoneNumbers: string[]) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/phones',
                                data: {
                                    phoneNumbers: phoneNumbers
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 


export async function GetPhones(currentUser: User) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'get',
                                url: '/api/phones',
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 
