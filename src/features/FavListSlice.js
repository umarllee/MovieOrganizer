import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "apiId",
  initialState: "",
  reducers: {
    addFavList: (state, action) => {
      state = action.payload;
      return state; 
    },
  },
}); 

export const { addFavList } = apiSlice.actions;

export default apiSlice.reducer;