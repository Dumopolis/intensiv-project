import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import GuestUserNav from '../GuestUserNav/GuestUserNav';
import AuthUserNav from '../AuthUserNav/AuthUserNav';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';



export default function Header() {
  const { isAuth, email } = useAuth()

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              Universe
            </Link>
          </Typography>

          {isAuth ? <AuthUserNav email={email} /> : <GuestUserNav />}

          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
