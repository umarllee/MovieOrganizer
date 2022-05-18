// import React, { useState } from 'react';
// import './favorites.css';
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { removeFromFavList } from '../features/reduxStorage'
// import FavoritePage from '../pages/FavouritePage'
// import {Link} from "react-router-dom";
// import {copyList} from '../features/apiSlice'


// import api from '../api'

// function Favorites() {
//     const [favsName, setFavsName] = useState("Default name")
//     const favs = useSelector((state) => state.favs);
//     const dispatch = useDispatch();


//     const handleSave = (e) => {
//         api.save({
//             "title": favsName,
//             "movies": favs
//         }).then(d => localStorage.setItem("id", d.id));


//         api.get(localStorage.getItem("id")).then( t => {
//             document.getElementById("goList").href = `/favorite/${t.id}` ;
//             document.getElementById("goList").classList.remove("go-remove");
//             document.getElementById("btnSave").classList.remove("favorites__save");
//             document.getElementById("btnSave").classList.add("favorites-remove");
//             console.log(t)
//             dispatch(copyList({ 
//                 id: `${t.id}`,
//                 title: `${t.movies}`, 
//                 year: `${t.title}`,
//             }))
//         });

//         // console.log(favsName)

//     };

//     return (
//         <div className="favorites">
//             <input placeholder="New list name: " className="favorites__name" onChange={(e) => setFavsName(e.target.value)}/>
//             <ul className="favorites__list">
//                 {favs.map(f => <li key={f.id} className="listItem"> {f.title}  {f.year}  <button type="button" className="delBtn" onClick={() => { dispatch(removeFromFavList({ id: f.id })) }}> X</button></li>)}
//             </ul>
//            <button type="button" id="btnSave" className="favorites__save" onClick={handleSave}>Save list</button>
//            <a id="goList" className="go-link go-remove" href="" target="_blank" >Go list</a>
//            {/* <Link id="goList" className="go-link go-remove" to="" > </Link> */}
//         </div>
//     );

// }

// export default Favorites;



import React, { useState } from 'react';
import './favorites.css';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromFavList } from '../features/reduxStorage'
import FavoritePage from '../pages/FavouritePage'
import { Link } from "react-router-dom";
import { addFavID } from '../features/apiSlice'


import api from '../api'

function Favorites() {
    const [favsName, setFavsName] = useState("Default name")
    const favs = useSelector((state) => state.favs);
    const dispatch = useDispatch();
    const apiID = useSelector((state) => state);

    const handleSave = (e) => {

        console.log(favsName);
        e.preventDefault();

        api.save({
            title: favsName,
            movies: favs
        }).then((d) => {
            dispatch(addFavID(d.id));
        })


        api.get(localStorage.getItem("id")).then(t => {
            document.getElementById("goList").classList.remove("go-remove");
            document.getElementById("btnSave").classList.remove("favorites__save");
            document.getElementById("btnSave").classList.add("favorites-remove");
            // console.log(t)

        });


    };

    return (
        <div className="favorites">
            <input placeholder="New list name: " className="favorites__name" onChange={(e) => setFavsName(e.target.value)} />
            <ul className="favorites__list">
                {favs.map(f => <li key={f.id} className="listItem"> {f.title}  {f.year}  <button type="button" className="delBtn" onClick={() => { dispatch(removeFromFavList({ id: f.id })) }}> X</button></li>)}
            </ul>
            <button type="button" id="btnSave" className="favorites__save" onClick={handleSave}>Save list</button>

            <Link
                id="goList"
                to={`/favorite/${apiID.api}`}
                className="go-link go-remove"
            >
                Go list
            </Link>
        </div>
    );

}

export default Favorites;