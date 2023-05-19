import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CardComponent from '../Card/CardComponent'


import './style.css'
import { fetchData } from '../../store/slices/dataReducer'
import { useData } from '../../hooks/useData'

function transformDataObject(item){
    return {
        urlImg: item.links[0].href,
        title: item.data[0].title,
        explanation: item.data[0].description,
        id: item.data[0].nasa_id,
        date: item.data[0].date_created
    }
}

export default function Cards() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const { status, data, error } = useData()


    return (
        <div className='cards__container'>

            {status === "success"
                && data.map((item) => {
                    const info = transformDataObject(item)
                    
                    return <CardComponent key={info.id} {...info} />
                })}

            {status === "loading" && <h2>Loading</h2>}

            {error && <h2>Hmmm sorry ... {error}</h2>}

        </div>
    )
}
