import React from 'react'; 
import './MovieListItem.css';
import {useDispatch} from 'react-redux'
import {addFavList} from  "../features/reduxStorage" 

export default function MovieItems({ movie })  {
    const dispatch = useDispatch();
    // const favs = useSelector((state) => state.favs);
    
    const handleAdd = () =>{
        dispatch(addFavList({ 
            id: `${movie.imdbID}`,
            title: `${movie.Title}`,  
            year: `(${movie.Year})`, 
        }))

    }
     
     
    return ( 

        <div className="movie-item">
            <img className="movie-item__poster" src={movie.Poster} alt={movie.Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{movie.Title} {`(${movie.Year})`}</h3>
                <button type="button" className="movie-item__add-button" onClick = {handleAdd}>Add to favorite list 🌟</button>
            </div>
        </div>

    )
}

 