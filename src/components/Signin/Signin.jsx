import React from 'react';

import { Container, Typography } from '@mui/material';

import Form from '../Form/Form';

import { useUserManipilator } from '../../hooks/useUserManipulator';


export default function Signin() {
  
  const {logIn} = useUserManipilator();

  return (
    <Container maxWidth="sm">
      <Typography variant='h2' margin={6} textAlign={'center'}>
        SIGN IN
      </Typography>
      <Form handleClick={logIn} buttonText="Sign In" />
    </Container>
  );
}
