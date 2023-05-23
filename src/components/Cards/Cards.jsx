import React from 'react';

import CardComponent from '../Card/CardComponent';

import { useItemsForCards } from '../../hooks/useItemsForCards';
import { transformDataObject } from '../../dataFormating/dataFormating';

import './style.css';


export default function Cards() {
    const { status, data, error } = useItemsForCards();

    return (
        <div className='cards__container'>

            {status === "success"
                && data.map((item) => {
                    const info = transformDataObject(item);

                    return <CardComponent key={info.id} {...info} />;
                })}

            {status === "loading" && <h2>Loading</h2>}

            {error && <h2>Hmmm sorry ... {error}</h2>}

        </div>
    );
}