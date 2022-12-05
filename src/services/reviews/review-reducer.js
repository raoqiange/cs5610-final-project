import {createSlice} from "@reduxjs/toolkit";
import {getReviewsByAnimeIdThunk, createReviewThunk, deleteReviewThunk} from "./review-thunks";

const initialState = {
    reviews: [],
    loading: false
}

const reviewReducer = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [getReviewsByAnimeIdThunk.pending]: (state, action) => {
            state.loading = true;
            state.reviews = [];
        },
        [getReviewsByAnimeIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews = action.payload;
        },
        [getReviewsByAnimeIdThunk.rejected]: (state, action) => {
            state.loading = false;
        },
        [createReviewThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews.push(action.payload);
        },
        [deleteReviewThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.reviews = state.reviews.filter(review => review._id !== action.payload);
        }
    }
})