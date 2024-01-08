import axios from 'axios';
import { User } from "firebase/auth"

export async function CreatePeople(currentUser: User, firstName: string, lastName: string, phoneNumber: string, email: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/peoples',
                                data: {
                                    firstName: firstName,
                                    lastName: lastName,
                                    phoneNumber: phoneNumber,
                                    email: email

                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result


} 


export async function GetPeople(currentUser: User) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'get',
                                url: '/api/peoples',
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 
