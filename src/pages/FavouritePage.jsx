// import React, { useState, useEffect, Component } from 'react';
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'

// import api from '../api'

// export default function  Favorite () {
//    const favs = useSelector((state) => state.favs);


//     return (
//       <div className="">
//         <ul className="favorites__list">
//                {favs.map(f => <li  className="listItem"> {f.favtitle} {f.apiID}  {f.favYear}</li>)}
//          </ul>
//          saallmm
//       </div>
//   );


// }



import React, { useState, useEffect, Component } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectFavs } from "../features/reduxStorage";
import api from '../api'

export default function Favorite() {
  const favs = useSelector(selectFavs);

  // console.log(favs)

  return (
    <div className="">
      <ul className="favorites__list">
        {favs.map(m =>
          <div>
            <li><a href={'https://www.imdb.com/title/' + `${m.id}` + '/'}>{m.id} ---- {m.title} ----- {m.year}</a></li>
          </div>)}
      </ul>
    </div>
  );


}

