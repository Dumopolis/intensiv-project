import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import GuestUserNav from '../GuestUserNav/GuestUserNav';
import AuthUserNav from '../AuthUserNav/AuthUserNav';


export default function Header() {
  const { isAuth, email } = useAuth()

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              Aston
            </Link>
          </Typography>

          {isAuth ? <AuthUserNav email={email} /> : <GuestUserNav />}

          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
