import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux'
import listReducer from './features/reduxStorage'
import favRed from './features/favouriteSlice'
import apiReducer from './features/apiSlice'
import favListName from './features/favListNameSlice'
import favList from './features/FavListSlice'
const store = configureStore({
  reducer: {
    favs: listReducer,
    favourite: favRed,
    favListName: favListName,
    favList : favList,
    api: apiReducer,
  },
})  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store= {store}>
        <App />
      </Provider> 
  </React.StrictMode>
);

