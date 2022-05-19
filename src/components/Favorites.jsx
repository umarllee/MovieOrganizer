import React, { useState } from 'react';
import './favorites.css';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromFavList } from '../features/reduxStorage'
import { addFavListName } from '../features/favListNameSlice'
import { Link } from "react-router-dom";
import { addFavID } from '../features/apiSlice'
import api from '../api'



function Favorites() {
    const [favsName, setFavsName] = useState("Default name");
    const favs = useSelector((state) => state.favs);
    const dispatch = useDispatch();
    const apiID = useSelector((state) => state);

    const handleSave = (e) => {
        e.preventDefault();

        api.save({
            title: favsName,
            movies: favs
        }).then((d) => { dispatch(addFavID(d.id)) })


    };

    const handleSaveListName = () => {
        dispatch(addFavListName({ favListName: favsName }));
    }

  

    // if(favs.length > 0 ) document.getElementById("btnSave").setAttribute('disables', false)
    // else document.getElementById("btnSave").setAttribute('disables', true)
    return (
        <div className="favorites">
            <input id="inputName" placeholder="New list name: " className="favorites__name" onChange={(e) => setFavsName(e.target.value)} />
            <ul className="favorites__list">
                {favs.map(f => <li key={f.id} className="listItem"> {f.title}  {f.year}  <button type="button" className="delBtn" onClick={() => { dispatch(removeFromFavList({ id: f.id })) }}> X</button></li>)}
            </ul>


            {
                apiID.api ?
                    <Link id="goList" to={`/favorite/${apiID.api}`} className="favorites__save" onClick={handleSaveListName}>
                        Go list
                    </Link> :
                    (favs.length === 0 ? <button disabled={true} className="fav-disable">Save list</button> : <button type="button" id="btnSave" className="favorites__save" onClick={handleSave} >Save list</button>)
            }
        </div>
    );

}

export default Favorites;