import React from 'react';
import Navbar from './layout/NavigationBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage'
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          {/* <Route path='/list:id' element={<ListItem/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
