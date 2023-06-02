import React from 'react';

import CardComponent from '../Card/CardComponent';



export default function Cards({ isLoading, isSuccess, data: nasaNews, error, }) {

    if (isSuccess) {
   
        return (
            <div className='cards__container'>

                {nasaNews.map((item) => {
                    return <CardComponent key={item.id} {...item} />;
                })}

            </div>
        );
        
    } else if (error) {

        return <h2>Hmmm sorry ... {error}</h2>;

    } else if (isLoading) {

        return <h2>Loading...</h2>;
    }

}