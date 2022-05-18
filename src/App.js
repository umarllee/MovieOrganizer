import React from 'react';
import Navbar from './layout/NavigationBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage'
import FavoritesPage from './pages/FavouritePage'
import api from './api'

function App() {

        //  let id = "";
        // api.get(localStorage.getItem("id")).then( t => id = t.id );

  return (
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/favorite/:id' element={<FavoritesPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
