import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "apiId",
  initialState: "",
  reducers: {
    addFavID: (state, action) => {
      state = action.payload;
      return state; 
    },
  },
});

export const selectID = (state) => state.apiID;

export const { addFavID } = apiSlice.actions;

export default apiSlice.reducer;



// import {createSlice} from '@reduxjs/toolkit'

// export const listSlice = createSlice({
//   name: "favs",
//   initialState: [],
//   reducers: {
//     copyList: (state, action) => {
//       const newItem = {
        
//         apiID: action.payload.id,
//         favtitle: action.payload.title,
//         favYear: action.payload.year,
//       }

//       state.push(newItem);

//     },
//   },

// });

// export const {copyList} = listSlice.actions;

// export default listSlice.reducer;