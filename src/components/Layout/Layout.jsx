import React from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AlertComponent from '../../helpComponents/AlertComponent/AlertComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { errorHandler } from '../ErrorBoundary/errorHandler';
import { ContextProvider } from '../../context/context';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono, monospace',
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: 'rgb(90,0,10)',
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
        <ContextProvider>
          <ErrorBoundary errorHandler={(error) => errorHandler(error.message)}>
            <Outlet />
          </ErrorBoundary>
        </ContextProvider>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
