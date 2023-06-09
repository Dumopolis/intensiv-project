import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { showAlert } from '../../store/slices/alertSlice';

export default function RequireUnAuth({ children }) {

    const location = useLocation();

    const { isAuth } = useAuth();

    const dispatch = useDispatch();

    if (isAuth) {
        dispatch(showAlert({
            severity: 'info',
            title: location.pathname + " is unavailable" ,
            text: 'You can`t open this link, because you authorized'
        }));
        return <Navigate to='/' />;
    }
    return children;


}
