import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Typography } from '@mui/material';

import { removeUser } from '../../store/slices/userSlice';
import { showAlert } from '../../store/slices/alertSlice';


export default function AuthUserNav({ email }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        navigate('/');
        dispatch(showAlert({
            severity: "info",
            title: "Logged out",
            text: `You are logged out of  ${email}`
        }));
        dispatch(removeUser());
    };

    return (
        <>
            <Typography variant="subtitle1" component="div" sx={{ marginRight: 4 }} >
                {email}
            </Typography>
            <Button onClick={logOut} color="inherit" sx={{ marginRight: 4 }}>Log out</Button>
        </>
    );
}