import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, Typography } from '@mui/material';

import { removeUser } from '../../store/slices/userSlice';
import { showAlert } from '../../store/slices/alertSlice';


export default function AuthUserNav({ email }) {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(showAlert({
            severity: "info",
            title: "Выход",
            text: `Вы вышли из аккаунта ${email}`
        }));
        dispatch(removeUser());
    };

    return (
        <>
            <Typography variant="subtitle1" component="div" sx={{ margin: 2 }} >
                {email}
            </Typography>
            <Button onClick={logOut} color="inherit">Log out</Button>
        </>
    );
}