import React, { useState } from 'react'
import './mainPage.css'
import Search from '../components/SearchFilm'
import MovieList from '../components/MovieList'
import Favorites from '../components/Favorites'
import api from '../api'


export default function MainPage() {

    

    const [films, setFilms] = useState([]);


    const onSearchHandle = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchStr = formData.get('search');

        try {
            const response = await api.searchMovies(searchStr);
            setFilms(response.Search);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="searchList">
                <Search onSearch={onSearchHandle} />
                <MovieList moviesList={films} />
            </div>

            <div className="favList">
                <Favorites />
            </div>


        </div>
    )
}
