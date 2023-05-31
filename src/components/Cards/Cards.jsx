import React from 'react';

import CardComponent from '../Card/CardComponent';

import { transformDataObject } from '../../formating/formating';


export default function Cards({ isLoading, isSuccess, data, error, }) {

    if (isSuccess) {

        const newsItems = data.collection.items;

        return (
            <div className='cards__container'>

                {newsItems.map((item) => {
                    const info = transformDataObject(item);

                    return <CardComponent key={info.id} {...info} />;
                })}

            </div>
        );
        
    } else if (error) {

        return <h2>Hmmm sorry ... {error}</h2>;

    } else if (isLoading) {

        return <h2>Loading...</h2>;
    }

}