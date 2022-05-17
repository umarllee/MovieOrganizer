// import {createSlice} from '@reduxjs/toolkit'


// export const listSlice = createSlice({
//     name: "favs",
//     initialState: { value: {title: "", year: ""} },
//     reducers: {
//         addFavList: (state, action) => {
//             state.value = action.payload;
//         },
//     },

// });

// export const {addFavList} = listSlice.actions;

// export default listSlice.reducer;


import {createSlice} from '@reduxjs/toolkit'


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

            state.push(newItem);
        },

        removeFromFavList: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
    },

});

export const {addFavList, removeFromFavList} = listSlice.actions;

export default listSlice.reducer;
