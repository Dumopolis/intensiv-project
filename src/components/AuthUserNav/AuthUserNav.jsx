import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { useUserManipilator } from '../../hooks/useUserManipulator';

export default function AuthUserNav({email}) {

    const { logOut } = useUserManipilator();

    return (
        <>
            <Typography variant="subtitle1" component="div" sx={{ marginRight: 4 }} >
                {email}
            </Typography>
            <Link to='/favorites'><Button color="inherit" sx={{ marginRight: 4 }}>Favorites</Button></Link>
            <Link to='/history'><Button color="inherit" sx={{ marginRight: 4 }}>History</Button></Link>
            <Button onClick={logOut} color="inherit" sx={{ marginRight: 4 }}>Log out</Button>
        </>
    );
}