// import React from 'react';
// import MovieLisItem from './MovieListItem'
 
// export default function MovieList ({movieList}) {
//     return(
//         <div>
//             {
//                 movieList?.length ? movieList.map(m => <MovieLisItem movie={m}/>) : "Not content"
//             }
//         </div>
//     )
// }


import React from 'react'
import MovieListItem from './MovieListItem'

const MovieList = ({ moviesList }) => {

    return (
        <div  >
            {moviesList?.length ?
                moviesList.map((m) =>
                    <MovieListItem movie={m}/>)
                : ''}
        </div>
    )
}

export default MovieList