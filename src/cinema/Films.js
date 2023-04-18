import React from 'react'
import { data } from './ListOfFilms'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Film() {
    const [film, setFilm] = useState([])
    const { theme } = useContext(ThemeContext)
    return (
        <div className='container' style={{ backgroundColor: theme.backgroundColor }}>
            {data.map((film) => (
                <div className='column' key={film.id} >
                    <div className='card' style={{ backgroundColor: theme.color, color: theme.backgroundColor }}>
                        <img src={`assets/${film.image}`} alt={film.title} />
                        <h3>{film.title}</h3>
                        <p><a href='#popup1' id='openPopup'><button onClick={() => { setFilm(film) }}>Detail</button></a></p>
                        <Link to={`detail/${film.id}`}>
                            <button>More</button>
                        </Link>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={`assets/${film.image}`} alt={film.title} />
                    <h1>{film.title}</h1>
                    <p className='year'>Year: {film.year}</p>
                    <p className='nation'>Nation: {film.nation}</p>
                    <a className='close' href='#close'>&times;</a>
                </div>
            </div>
        </div>
    )
}
