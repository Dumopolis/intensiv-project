import React from 'react';

import { Typography } from '@mui/material';

import image from '../../img/loading.gif';

export default function Loader() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <img src={image} alt="loader" style={{
                display: 'block',
                width: "20%",
                objectFit: 'contain'
            }} />
            <Typography variant='h3' textAlign={'center'} letterSpacing={15}>
                LOADING
            </Typography>
        </div>
    );
}
