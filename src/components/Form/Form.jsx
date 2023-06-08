import React, { useState } from 'react';

import { Button, FormGroup, Input } from '@mui/material';


export default function Form(
    {
        handleClick,
        buttonText,
        color = "secondary",
        firstPlaceholder = "Email",
        secondPlaceholder = "Pasword",
    }
) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <FormGroup sx={{ gap: '10px' }}>

            <Input
                placeholder={firstPlaceholder}
                margin="dense"
                color={color}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                placeholder={secondPlaceholder}
                margin="dense"
                color={color}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                color={color}
                onClick={() => handleClick(email, password)}
            >
                {buttonText}
            </Button>

        </FormGroup>
    );
}
