import React from 'react';

import CardComponent from '../Card/CardComponent';
import Loader from '../Loader/Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


export default function Cards({ isLoading, isSuccess, data: nasaNews, error}) {
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

}