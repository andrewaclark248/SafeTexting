import Grid from '@mui/material/Grid'
import safeTextingLogo from "./../../assets/safe-texting-logo.png"
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import WithPrivateRoute from './../auth/WithPrivateRoute';
import auth from "../../config/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { User } from "firebase/auth"
import {useEffect} from 'react'

interface Props {
  children?: React.ReactNode
  currentUser: User | null | undefined
}


const PrivateLayout: React.FC<Props> = ({children, currentUser}: Props) => {

    if (!currentUser) {
        return <Navigate to="/" replace />;
    }

    return (
            <div >

                <Grid container spacing={0} sx={{ mt: 10 }} >
                    <div>
                        Some random text
                    </div>
                    <Outlet/>

                </Grid>

            </div>

    )
}


export default PrivateLayout;
