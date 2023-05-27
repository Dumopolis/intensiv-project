import React from 'react';

import CardComponent from '../Card/CardComponent';

import { transformDataObject } from '../../formating/formating';


export default function Cards({ isLoading, isSuccess, data, error,  }) {

    const newsItems = isSuccess && data.collection.items;
    
    return (
        <div className='cards__container'>

            {isSuccess
                && newsItems.map((item) => {
                    const info = transformDataObject(item);

                    return <CardComponent key={info.id} {...info} />;
                })}

            {isLoading === "loading" && <h2>Loading</h2>}

            {error && <h2>Hmmm sorry ... {error}</h2>}

            
        </div>
    );

}