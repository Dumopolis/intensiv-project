import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Container, Typography } from '@mui/material';

import { setUser } from '../../store/slices/userSlice';
import { showAlert } from '../../store/slices/alertSlice';

import Form from '../Form/Form';


export default function Signup() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSignUp = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/');
      })

      .then(() => dispatch(showAlert({
        severity: "success",
        title: "Successful registration",
        text: "Congratulations! You are registered"
      })))

      .catch((err) => dispatch(showAlert({
        severity: "error",
        title: "An error has occurred",
        text: err.message,
      })));
  };

  return (
    <Container maxWidth="sm">
       <Typography variant='h2' margin={6} textAlign={'center'}>
          REGISTRATION
        </Typography>
      <Form handleClick={handleSignUp} buttonText="Sign Up" />
    </Container>
  );
}
