import { RiVideoUploadFill } from 'react-icons/ri';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Typography from '@mui/material/Typography';
import useToggle from '../hooks/useToggle';
import { uploadMenuItems } from '@data/app.data';

const Upload = () => {
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
        <RiVideoUploadFill size={24} />
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
        {uploadMenuItems.map((item) => {
          return (
            <MenuItem key={item.id} onClick={handleClose}>
              {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
              <Typography
                sx={{ textAlign: 'center', width: '100%' }}
                component="span"
              >
                {item.text}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default Upload;
