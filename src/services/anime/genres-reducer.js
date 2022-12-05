import {createSlice} from "@reduxjs/toolkit";
import {getAllAnimeGenres} from "./genres-thunks";

const initialState = {
    genres: [], //a list of existing genres
    loading: false
}

const genresReducer = createSlice({
    name: 'getGenres',
    initialState,
    extraReducers: {
        [getAllAnimeGenres.pending]: (state, action) => {
            state.loading = true;
            state.genres = [];
        },
        [getAllAnimeGenres.fulfilled]: (state, action) => {
            state.loading = false;
            state.genres = action.payload
        }
    }
})

export default genresReducer.reducer;

