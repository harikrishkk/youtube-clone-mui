import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { BsFillMicFill } from 'react-icons/bs';
import { Button } from '@mui/material';

export default function SearchBar() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 400,
          boxShadow: 0,
          border: '1px solid #ccc',
          borderRadius: 0,
          mr: 1,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, pl: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="button"
          sx={{ backgroundColor: '#eee', borderRadius: 0 }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Button sx={{ minWidth: 'auto' }}>
        <BsFillMicFill size={18} />
      </Button>
    </Box>
  );
}
