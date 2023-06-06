import React from 'react';

import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

import CardComponent from '../Card/CardComponent';
import Loader from '../Loader/Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


function Cards({ isLoading, isSuccess, data: nasaNews, error }) {
    if (isSuccess) {

        return (
            <div className='cards__container'>

                {nasaNews.map((item) => {
                    return <CardComponent key={item.id} {...item} />;
                })}

            </div>
        );

    } else if (error) {

        return <ErrorComponent error={error.error} />;

    } else if (isLoading) {

        return <Loader />;
    }
    return (
        <Typography variant='h2' textAlign={"center"} padding={5}>
            We can`t get news. Try again later
        </Typography>
    );
}

Cards.propTypes = {
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    error: PropTypes.object,
    nasaNews: PropTypes.object,
};

export default Cards;