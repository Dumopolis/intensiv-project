import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AlertTitle, Alert, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import { removeAlert } from '../../store/slices/alertSlice';
import { useAlert } from '../../hooks/useAlert';


export default function AlertComponent() {
    const dispatch = useDispatch();
    const closeAlert = () => {
        dispatch(removeAlert());
    };
    const { activeAlert, severity, title, text } = useAlert();

    useEffect(() => {
        setTimeout(() => dispatch(removeAlert()), 10000);
        // eslint-disable-next-line
    }, [activeAlert])

    return activeAlert ? (
        <Alert severity={severity} sx={{
            position: "absolute",
            right: 10,
            top: 70,
            width: "30%"
        }} action={
            <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={closeAlert}
            >
                <CloseIcon fontSize="inherit" />
            </IconButton>
        }>
            <AlertTitle>{title}</AlertTitle>
            {text}
        </Alert>

    ) : null;
}
