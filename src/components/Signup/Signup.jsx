import React from 'react';

import { Container, Typography } from '@mui/material';

import Form from '../Form/Form';
import { useUserManipilator } from '../../hooks/useUserManipulator';


export default function Signup() {
  const {signUp} = useUserManipilator();

  return (
    <Container maxWidth="sm">
      <Typography variant='h2' margin={6} textAlign={'center'}>
        REGISTRATION
      </Typography>
      <Form handleClick={signUp} buttonText="Sign Up" />
    </Container>
  );
}
