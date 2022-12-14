import './App.css';
import * as React from 'react';
import { Box } from '@mui/material';
import AppNavMenu from '@navigation/AppNavMenu';
import AppContentArea from '@components/AppContentArea';
import { appWrapper } from '@styles/styles';

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={appWrapper}>
      <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
      <AppContentArea isOpen={mobileOpen} />
    </Box>
  );
}

export default App;
