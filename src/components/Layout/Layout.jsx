import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { FeatureFlagContext } from '../../context/context';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AlertComponent from '../../helpComponents/AlertComponent/AlertComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { errorHandler } from '../ErrorBoundary/errorHandler';


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
  const { setTelegramShareEnabled } = useContext(FeatureFlagContext);

  useEffect(() => {
    const fetchFeatureFlag = async () => {
      await fetch("http://localhost:3001/api")
        .then((response => response.json()))
        .then((data) => data.feature_flags.isTelegramShareEnabled)
        .then((status) => setTelegramShareEnabled(status))
        .catch(() => console.error);
    };

    fetchFeatureFlag();
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AlertComponent />
      <div className="outlet">
        <ErrorBoundary errorHandler={(error) => errorHandler(error.message)}>
          <Outlet />
        </ErrorBoundary>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
