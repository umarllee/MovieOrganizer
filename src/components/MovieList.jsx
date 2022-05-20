import React from 'react'
import MovieListItem from './MovieListItem'
import './movielist.css'

const MovieList = ({ moviesList }) => {

    return (
        <div style={{marginTop: '6%'}} className="list" >
            {moviesList?.length ?
                moviesList.map((m) =>
                    <MovieListItem key={m.imdbID} movie={m}/>)
                : 'Not content yet...'}
        </div>
    ) 
}

export default MovieList 