import React, { Component, useState } from 'react';
import Navbar from './layout/NavigationBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage'
import FavoritesPage from './pages/FavouritePage'
import LoaderPage from './pages/LoaderPage'


export default class  App extends Component{

   state ={ 
     isLoading: false 
  }

  componentDidMount() {
   setTimeout(() => {
    this.setState({isLoading: true})
   }, 2000);
}

  render(){
    
    return (
      <div className="" style ={{backgroundColor : "#fff"}}>

        {!this.state.isLoading ? <LoaderPage/> : 
           (
           <BrowserRouter>
             <Navbar/>
             
             <Routes>
               <Route path='/' element={<MainPage/> }/>
               <Route path='/favorite/:id' element={<FavoritesPage/>}/>
             </Routes>
           </BrowserRouter>
           )
        }
        
        
      </div>
    );
  }

}
