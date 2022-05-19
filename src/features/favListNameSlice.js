import { createSlice } from '@reduxjs/toolkit'

export const listNameSlice = createSlice({
    name: "favs",
    initialState: [],
    reducers: {

        addFavListName: (state, action) => {
            const newItem = {
                favListName: action.payload.favListName
            }
            state.push(newItem);
        }
    },

});

export const {
    addFavListName
} = listNameSlice.actions;

export default listNameSlice.reducer;