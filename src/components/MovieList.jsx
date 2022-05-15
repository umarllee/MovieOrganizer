import React from 'react'
import MovieListItem from './MovieListItem'

const MovieList = ({ moviesList }) => {

    return (
        <div style={{marginTop: '6%'}} >
            {moviesList?.length ?
                moviesList.map((m) =>
                    <MovieListItem movie={m}/>)
                : ''}
        </div>
    )
}

export default MovieList