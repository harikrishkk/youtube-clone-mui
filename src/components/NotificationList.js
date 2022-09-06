import { BsBellFill } from 'react-icons/bs';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import React from 'react';
import Typography from '@mui/material/Typography';
import useToggle from '@hooks/useToggle';
import { notificationData } from '@data/app.data';

const NotificationsList = () => {
  const { anchorEl, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ px: 1 }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BsBellFill size={24} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            pb: 0,
          }}
        >
          {notificationData.map((item) => {
            return (
              <Link href={item.url} key={item.id} underline="none">
                <ListItem sx={{ pt: 0, pb: 1, mt: 1 }} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Channel avatar"
                      src={`https://i.pravatar.cc/150?img=${item.id}`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.text}
                    secondary={
                      <React.Fragment>
                        <Box sx={{ mt: 2 }}>
                          <Typography
                            sx={{ display: 'inline', fontSize: 12 }}
                            component="span"
                          >
                            {item.time}
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {notificationData.length !== item.id && (
                  <Divider variant="inset" component="li" />
                )}
              </Link>
            );
          })}
        </List>
      </Menu>
    </Box>
  );
};

export default NotificationsList;
