import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import SearchBar from '../SearchBar/SearchBar';
import GuestUserNav from '../GuestUserNav/GuestUserNav';
import AuthUserNav from '../AuthUserNav/AuthUserNav';

import { useAuth } from '../../hooks/useAuth';


export default function Header() {
  const { isAuth, email } = useAuth();

  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              UNIVERSE
            </Link>
          </Typography>
          {isAuth ? <AuthUserNav email={email} /> : <GuestUserNav />}
          {pathname !== '/search' && <SearchBar />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
