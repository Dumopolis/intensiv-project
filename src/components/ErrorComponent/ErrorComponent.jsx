import React from 'react';

import { Container, Typography } from '@mui/material';

import image from '../../img/sorry.gif';

export default function ErrorComponent({ error }) {
    return (
        <Container >
            <Typography variant='h2' textAlign='center' padding={5}>
                Sorry... we have problem :(
            </Typography>
            <Typography variant="body1"  textAlign='center'>
                {error}
            </Typography>
            <img src={image} alt="sorry" style={{
                display: 'block',
                margin: '0 auto'
            }} />
        </Container>
    );
}
