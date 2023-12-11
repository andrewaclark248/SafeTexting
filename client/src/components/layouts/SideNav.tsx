import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Person2Icon from '@mui/icons-material/Person2';
import MessageIcon from '@mui/icons-material/Message';
import MailIcon from '@mui/icons-material/Mail';
import GroupsIcon from '@mui/icons-material/Groups';
import LoopIcon from '@mui/icons-material/Loop';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import Button from '@mui/material/Button';


import { logoutUser } from './../../utilities/Authentication'

import { Link, useNavigate, Navigate } from "react-router-dom";


import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid'

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    //borderColor: "#ba000d",
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} sx={{backgroundColor: "#1976d2"}}>
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={0}>
            <Grid item xs={11}>
              <Link  to="/home" style={{textDecoration: "none", color: "black"}}>
                  <Typography variant="h6" noWrap component="div">
                    Safe Texting
                  </Typography>
              </Link>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" onClick={()=> { logoutUser();}} sx={{backgroundColor: "#e3f2fd", color: "#212121" }}>Logout</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  
            PaperProps={{
                sx: {
                backgroundColor: "#212121"
                }
            }} 
        >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{fill: "white"}} /> : <ChevronLeftIcon sx={{fill: "white"}} />}
          </IconButton>
        </DrawerHeader>
        <List >
          {['MessageIcon', 'MailIcon', 'GroupsIcon', 'LoopIcon'].map((text, index) => (
            <Link to={GetRoute(text)} key={index}> 
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                //navigate("/home");
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {GetIcon(text)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} />
              </ListItemButton>
            </ListItem>
            </Link>

          ))}
        </List>
        <Divider  sx={{background: "white" }} />
        <List>
          {['Person2Icon', 'ContactSupportIcon'].map((text, index) => (
            <Link to="/profile" key={index}> 
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {GetIcon(text)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: "white" }} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={0} sx={{ mt: 10 }} >
          <Outlet/>
        </Grid>
        <DrawerHeader />
      </Box>
    </Box>
  );
}

function GetIcon(text: string) {
  let component = null;
  if (text == "Person2Icon") {
    component = <Person2Icon sx={{color: "white" }} />
  } else if (text == "MessageIcon" ) {
    component = <MessageIcon sx={{color: "white" }} />
  } else if (text == "MailIcon") {
    component = <MailIcon sx={{color: "white" }} />
  } else if (text == "GroupsIcon") {
    component = <GroupsIcon sx={{color: "white" }} />
  } else if (text == "LoopIcon") {
    component = <LoopIcon sx={{color: "white" }} />
  } else if (text == "ContactSupportIcon") {
    component = <ContactSupportIcon sx={{color: "white" }} />
  }
  return component;
}

function GetRoute(text: string) {
  let route = '/home';
  if (text == "Person2Icon") {
    route = "/profile"
  } else if (text == "MessageIcon" ) {
    route = "/messages"
  } else if (text == "MailIcon") {
    route = "/mail"
  } else if (text == "GroupsIcon") {
    route = "/groups"
  } else if (text == "LoopIcon") {
    route = "/recurring-messages"
  } else if (text == "ContactSupportIcon") {
    route = "/support"
  }
  return route;
}

function handleNavigate() {
  console.log("top suggestion clicked")

}