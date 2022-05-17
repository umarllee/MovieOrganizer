import React, { useState } from 'react';
import './favorites.css';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromFavList } from '../features/reduxStorage'

function Favorites() {
    // const [favsName, setFavsName] = useState([])
    const favs = useSelector((state) => state.favs);
    const dispatch = useDispatch();

    return (
        <div className="favorites">
            <input placeholder="New list name: " className="favorites__name" />
            <ul className="favorites__list">
                {favs.map(f => <li key={f.id} className="listItem"> {f.title}  {f.year}  <button type="button" className="delBtn" onClick={() => { dispatch(removeFromFavList({ id: f.id })) }}> X</button></li>)}
            </ul>
            <button type="button" className="favorites__save" disabled>Save list</button>
        </div>
    );

}

export default Favorites;