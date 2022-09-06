import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SideList from './SideList';
import TabList from './TabList';
import CardList from './CardList';
import Shorts from './Shorts';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { youtubeResponse } from '../data/app.data';
import Grid from '@mui/material/Grid';

const AppContentArea = ({ isOpen }) => {
  const [hide, setHide] = useState(false);

  const items1 = youtubeResponse.slice(0, 8);
  const items2 = youtubeResponse.slice(8);

  const hideShorts = () => {
    setHide(true);
  };

  const undoHide = () => {
    setHide(false);
  };
  const sideBarWidth = isOpen ? '70px' : '250px';
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        mt: 8,
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Box
        component="div"
        sx={{
          flexBasis: sideBarWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflowY: 'auto',
        }}
      >
        <SideList />
      </Box>
      <Box
        component="div"
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Box
          sx={{
            my: 2,
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <TabList />
        </Box>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            p: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <CardList items={items1} />
          <Box
            component="div"
            sx={{
              display: 'block',
              p: 2,
              minHeight: '100px',
              mb: 4,
              overflow: 'hidden',
              overflowY: 'auto',
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <Shorts
              hideShorts={hideShorts}
              isHidden={hide}
              undoHide={undoHide}
            />
          </Box>
          <CardList items={items2} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppContentArea;
