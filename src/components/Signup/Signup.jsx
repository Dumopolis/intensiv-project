import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { setUser } from '../../store/slices/userSlice';
import { showAlert } from '../../store/slices/alertSlice';

import Form from '../Form/Form'

import { Container } from '@mui/material';


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
        }))
        navigate('/')
      })

      .then(() => dispatch(showAlert({
        severity: "success",
        title: "Успешная регистрация",
        text: "Поздравляем! Вы зарегистрировались"
      })))

      .catch((err) => dispatch(showAlert({
        severity: "error",
        title: "Произошла ошибка",
        text: err.message,
      })))
  }

  return (
    <Container maxWidth="sm">
      <Form handleClick={handleSignUp} buttonText="Sign Up" />
    </Container>
  )
}
