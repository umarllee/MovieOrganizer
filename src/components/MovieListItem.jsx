import React from 'react';
import './MovieListItem.css';


export default function MovieItems({ movie })  {
    return (

        <div className="movie-item">
            <img className="movie-item__poster" src={movie.Poster} alt={movie.Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{movie.Title} {`(${movie.Year})`}</h3>
                <button type="button" className="movie-item__add-button">Add to favorite list.</button>
            </div>
        </div>

    )
}

