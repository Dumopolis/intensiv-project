import React from 'react';

import image from '../../img/loading.gif';

export default function Loader() {
    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <img src={image} alt="loader" style={{
            display:'block',
            width: "20%",
            objectFit: 'contain'
        }} />
        </div>
    );
}
