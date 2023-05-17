import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import AlertComponent from '../../helpComponents/AlertComponent/AlertComponent';

const theme = createTheme({
    palette: {
      primary: {
        main: '#b9d3f6',
      },
      secondary: {
        main: '#303f9f',
      },
    },
  }
)

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
  )
}
