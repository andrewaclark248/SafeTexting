import axios from 'axios';
import { User } from "firebase/auth"

export async function CreateGroupPeople(currentUser: User, groupId: string | undefined, personId: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'post',
                                url: '/api/group_people',
                                data: {
                                    groupId: groupId,
                                    personId: personId
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 


export async function DeleteGroupPeople(currentUser: User, groupId: string | undefined, personId: string) {

    const token = await currentUser.getIdToken();

    let result = await axios({
                                method: 'delete',
                                url: '/api/group_people',
                                data: {
                                    groupId: groupId,
                                    personId: personId
                                },
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 



export async function GetGroupPeople(currentUser: User, groupId: string | undefined, notInGroup: boolean = false) {

    const token = await currentUser.getIdToken();
    const url = notInGroup ? `/api/group_people/${groupId}?not_in_group=true` : `/api/group_people/${groupId}`

    let result = await axios({
                                method: 'get',
                                url: url,
                                headers: {
                                    Authorization: 'Bearer ' + token
                                }
                            });

    return result.data


} 