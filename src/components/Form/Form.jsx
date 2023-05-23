import React, { useState } from 'react';

import { Button, FormGroup, Input } from '@mui/material';


export default function Form({ handleClick, buttonText }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <FormGroup sx={{ gap: '10px' }}>

            <Input
                placeholder="Email"
                margin="dense"
                color="secondary"
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                placeholder='Pasword'
                margin="dense"
                color="secondary"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                color='secondary'
                onClick={() => handleClick(email, password)}
            >
                {buttonText}
            </Button>

        </FormGroup>
    );
}
