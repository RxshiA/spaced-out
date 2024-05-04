import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../../components/landing/AppAppBar';
import Hero from '../../components/landing/Hero';
import Explanation from '../../components/landing/Explanation';
import Highlights from '../../components/landing/Highlights';
import MarsRovers from '../../components/landing/MarsRovers';
import Donki from '../../components/landing/Donki';
import Epic from '../../components/landing/Epic';
import Footer from '../../components/landing/Footer';
import getLPTheme from '../../themes/getLPTheme';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Explanation />
        <Donki />
        <Divider />
        <Epic />
        <Divider />
        <Highlights /> 
        <Divider />
        <MarsRovers />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}