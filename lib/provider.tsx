'use client';
import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#003145',
      dark: '#002A3B',
    },
    secondary: {
      main: '#0FA958',
      dark: '#44924C',
    },
  },
});

export default theme;
