import React from 'react';
import { useSelector } from 'react-redux'
import { selectFavs } from "../features/reduxStorage";
import './favPage.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function Favorite() {
  const favs = useSelector(selectFavs);
  const favsName = useSelector((state) => state.favListName)

  
 console.log(favs)
  return (
    <div className="con-favs">
      {favsName.map(m => <p className="favList-name"> {m.favListName}</p>)}
      <ul className="favorites__list">
        {favs.map(m =>
          <li className="favs-list" key={m.id}><a href={`https://www.imdb.com/title/${m.id}/`}>{m.title}  {m.year}</a></li>
        )}
      </ul>
    </div>

    // <Splide aria-label="My Favorite Images">
    //     <SplideSlide>
    //       {/* <img src="linkedin.png" alt="Image 1"/> */}
    //       {favs.map(m =>
    //       <a href={`https://www.imdb.com/title/${m.id}/`}>{m.title}  {m.year}</a>
    //     )}
    //     </SplideSlide>
    //     <SplideSlide>
    //       {/* <img src="image2.jpg" alt="Image 2"/> */}
    //     </SplideSlide>
    // </Splide>
  );


}

