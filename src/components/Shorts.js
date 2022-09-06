import Box from '@mui/system/Box';
import React from 'react';
import { CgYoutube } from 'react-icons/cg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { shortsItems } from '@data/app.data';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { RiCloseFill } from 'react-icons/ri';

const Shorts = ({ hideShorts, isHidden, undoHide }) => {
  return (
    <Box>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          my: 3,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <CgYoutube size={32} color="red" />
          <Typography
            sx={{ ml: 1, fontSize: 20, fontWeight: 'bold' }}
            variant="h6"
          >
            Shorts
          </Typography>
        </Box>
        <Button onClick={hideShorts}>
          <RiCloseFill size={24} />
        </Button>
      </Box>
      {isHidden ? (
        <Box>
          <Typography>
            The shelf will be hidden for 30 days
            <Button onClick={undoHide}> Undo </Button>
          </Typography>
        </Box>
      ) : (
        <Box
          component="div"
          sx={{
            overflowY: 'scroll',
            '::-webkit-scrollbar': { height: '3px' },
          }}
        >
          <Box component="div" sx={{ display: 'flex' }}>
            {shortsItems.map((item) => {
              return (
                <Link key={item.id} href={item.shortsUrl}>
                  <Card sx={{ maxWidth: 200, boxShadow: 'none', mx: 2 }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.url}
                      alt="shorts image"
                    />
                    <CardContent>
                      <Typography
                        noWrap
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {item.text}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.views} Views
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Shorts;
