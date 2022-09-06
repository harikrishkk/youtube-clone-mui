import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AiFillYoutube } from 'react-icons/ai';
import Upload from '@components/Upload';
import NotificationsList from '@components/NotificationList';
import UserProfile from '@components/UserProfile';
import SearchBar from './SearchBar';

const AppNavMenu = (props) => {
  return (
    <AppBar component="nav" sx={{ backgroundColor: 'white', color: '#000' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <AiFillYoutube size={32} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: 22,
                ml: 1,
                fontFamily: 'Oswald',
              }}
            >
              YouTube
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Upload />
            <NotificationsList />
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavMenu;
