import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@mui/material'

export default function GuestUserNav() {
    return (
        <>
            <Link to="/signin">
                <Button color="inherit">Sign in</Button>
            </Link>
            <Link to="/signup">
                <Button color="inherit">Sign up</Button>
            </Link>
        </>
    )
}
