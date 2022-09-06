import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { trimText } from '@data/app.data';

const AppCard = ({ url, title, channelTitle, videoId }) => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
        <CardMedia component="img" height="240" image={url} alt={title} />
      </Link>
      <CardContent sx={{ m: 0, p: 0 }}>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            p: 0,
            m: 0,
            maxWidth: '100%',
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Channel avatar"
                src={`https://i.pravatar.cc/150?img=1`}
              />
            </ListItemAvatar>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold', mb: 1 }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {trimText(title)}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{ mr: 1, mb: 0, p: 0 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {channelTitle}
                </Typography>
                <AiFillCheckCircle />
              </Box>
            </Box>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default AppCard;
