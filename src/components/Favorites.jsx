import React, { useState } from 'react';
import './favorites.css';


function Favorites() {
    const [favs, setFavs] = useState([])

    return (
        <div className="favorites">
            <input placeholder="New list name: " className="favorites__name" />
            <ul className="favorites__list">
            </ul>
            <button type="button" className="favorites__save" disabled>Save list</button>
        </div>
    );

}

export default Favorites;