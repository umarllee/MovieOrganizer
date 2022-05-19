import {
    createSlice
} from '@reduxjs/toolkit'

export const listSlice = createSlice({
    name: "favs",
    initialState: [], 
    reducers: {
        addFavList: (state, action) => {
            const newItem = {
                id: action.payload.id,
                title: action.payload.title,
                year: action.payload.year,
            }

            if (state.every(s => s.id !== newItem.id)) {
                state.push(newItem);
            }

        },

        removeFromFavList: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },


    },

});

export const selectFavs = (state) => state.favs;

export const {
    addFavList,
    removeFromFavList
} = listSlice.actions;

export default listSlice.reducer;