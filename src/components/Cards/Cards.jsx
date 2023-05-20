import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CardComponent from '../Card/CardComponent';

import { fetchData } from '../../store/slices/dataReducer';
import { useItemsForCards } from '../../hooks/useItemsForCards';
import { transformDataObject } from '../../dataFormating/dataFormating';

import './style.css';


export default function Cards() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

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
