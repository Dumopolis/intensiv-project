import React from 'react';

import { useGetOneNewsQuery } from '../../store/slices/nasaApi';

import { transformDataObject } from '../../formating/formating';

import CardComponent from '../Card/CardComponent';

export default function FavoriteCardTest({ id }) {
    const { data, isSuccess, error, isLoading } = useGetOneNewsQuery(id);

    if (isSuccess) {
        const itemInfo = transformDataObject(data.collection.items[0]);

        return (
            isSuccess && <CardComponent {...itemInfo} />
        );
        
    } else if (error) {

        return <h2>{error}</h2>;

    } else if (isLoading) {

        return <h2>Loading...</h2>;
    }

}
