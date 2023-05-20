import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Container } from '@mui/material';

import { setUser } from '../../store/slices/userSlice';
import { showAlert } from '../../store/slices/alertSlice';

import Form from '../Form/Form';


export default function Signin() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/');
        return user;
      })

      .then((user) => dispatch(showAlert({
        severity: "success",
        title: "Успешная авторизация",
        text: `Вы вошли под логином ${user.email}`
      })))

      .catch((err) => dispatch(showAlert({
        severity: "error",
        title: "Произошла ошибка",
        text: err.message,
      })));
  };

  return (
    <Container maxWidth="sm">

      <Form handleClick={handleLogin} buttonText="Sign In"/>
    </Container>
  );
}
