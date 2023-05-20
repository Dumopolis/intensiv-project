import React from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AlertComponent from '../../helpComponents/AlertComponent/AlertComponent';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono, monospace',
  },
  
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#303f9f',
    },
  },
}
);

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AlertComponent />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
