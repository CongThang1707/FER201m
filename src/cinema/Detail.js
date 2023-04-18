import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from './ListOfFilms'

export default function Detail() {
    const userName = useParams();
    const film = data.find(obj => {
        return obj.id == userName.id;
    });
    return (
        <div className='detail-container'>
            <div className='product-card'>
            <div className='badge'>{film.title}</div>
                <div className='product-tumb'>
                    <img src={`../assets/${film.image}`} alt='' />
                </div>
                <div className='product-details'>
                    <h4>Nation: {film.nation}</h4>
                    <h4>Year: {film.year}</h4>
                    <h4>Length: {film.length}</h4>
                    <p>{film.describe}</p>
                    <div className='product-bottom-details'></div>
                </div>
            </div>
        </div>
    )
}

