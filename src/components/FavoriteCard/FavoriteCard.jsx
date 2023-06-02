import React from 'react';

import { Typography } from '@mui/material';

import { useGetOneNewsQuery } from '../../store/slices/nasaApi';


import CardComponent from '../Card/CardComponent';
import Loader from '../Loader/Loader';

export default function FavoriteCard({ id }) {
    const { data: newsItem, isSuccess, error, isLoading } = useGetOneNewsQuery(id);

    if (isSuccess) {

        return (
            <CardComponent {...newsItem} />
        );
        
    } else if (error) {

        return <Typography variant='body1' padding={10}>Sorry... We can`t get this news</Typography>;

    } else if (isLoading) {

        return <Loader />;
    }

}
