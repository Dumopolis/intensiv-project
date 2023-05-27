import React from 'react';

import { useGetOneNewsQuery } from '../../store/slices/nasaApi';

import { transformDataObject } from '../../formating/formating';

import CardComponent from '../Card/CardComponent';

export default function FavoriteCardTest({ id }) {
    const { data, isSuccess } = useGetOneNewsQuery(id);

    const itemInfo = isSuccess && transformDataObject(data.collection.items[0]);

    return (
        isSuccess && <CardComponent {...itemInfo} />

    );
}
