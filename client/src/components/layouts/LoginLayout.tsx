import Grid from '@mui/material/Grid'
import safeTextingLogo from "./../../assets/safe-texting-logo.png"
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}


function LoginLayout( {children}: Props )  {

    return (
        <div >

        <Grid container spacing={0} sx={{ mt: 10 }} >
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={5}>
            <img src={safeTextingLogo} style={{ width: "100%", height: "100%" }}/>
          </Grid>
          <Grid item xs={5}>
            <Outlet/>
          </Grid>
          <Grid item xs={1}>
            
          </Grid>

        </Grid>

      </div>
    )
}

export default LoginLayout;
