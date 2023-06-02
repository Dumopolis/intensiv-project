import React from 'react';

import { Box, Typography } from '@mui/material';

import { useGetOneNewsQuery } from '../../store/slices/nasaApi';

import image from '../../img/sorry.gif';


import CardComponent from '../Card/CardComponent';
import Loader from '../Loader/Loader';

export default function FavoriteCard({ id }) {
    const { data: newsItem, isSuccess, error, isLoading } = useGetOneNewsQuery(id);

    if (isSuccess) {

        return (
            <CardComponent {...newsItem} />
        );

    } else if (error) {

        return (
            <Box padding={2}>
                <Typography variant='body1' textAlign='center'>Sorry... We can`t get this news</Typography>
                <img src={image} alt='sorry' style={{ display: 'block', width: '70%', margin: '0 auto' }} />
            </Box>
        );

    } else if (isLoading) {

        return <Loader />;
    }

}
