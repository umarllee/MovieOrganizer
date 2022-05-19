import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const saveAsync = createAsyncThunk(
    'favourite/save',
    async (request) => {
        const response = await api.save(request);
        localStorage.setItem("ID", response.id);
        return response.id;
    }
) 

const favSlice = createSlice({
    name: 'favourite',
    initialState: {
        id: ''
    },
    reducers: {
        init: (state) => {
            state.id = localStorage.getItem('ID') || '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveAsync.fulfilled, (state, action) => {
                state.id = action.payload;
                localStorage.setItem('ID', state.id);
            })
            .addCase(saveAsync.rejected, (state) => {
                state.id = '';
                localStorage.clear();
            });
    }
}); 

export const selectID = (state) => state.favourite.id;
export const { init } = favSlice.actions;

export default favSlice.reducer;
