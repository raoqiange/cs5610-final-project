import {createSlice} from "@reduxjs/toolkit";
import {getAllAnimeThunk, getAnimeByGenreThunk ,searchAnimeThunk,
    getAnimeDetailThunk, getRecentlyReviewedAnimeByUsernameThunk} from "./anime-thunks";

const initialState = {
    allAnimeList: [], //home page for anonymous user
    loadingAllAnime: false, //home page for anonymous user
    recentlyReviewedAnimeList: [],
    loadingRecentlyReviewedAnime: false,
    searchedAnimeList: [], //search page, a list of search result
    loadingSearchedAnime: false, //search page
    animeDetail: {}, // detail page, detail for current anime
    loadingDetail: false //detail page
}

const animeReducer = createSlice({
    name: 'searchAnime',
    initialState,
    extraReducers: {
        [getAllAnimeThunk.pending]: (state, action) => {
            state.allAnimeList = [];
            state.loadingAllAnime = true;
        },
        [getAllAnimeThunk.fulfilled]: (state, action) => {
            state.allAnimeList = action.payload;
            state.loadingAllAnime = false;
        },
        [getAnimeByGenreThunk.pending]: (state, action) => {
            state.allAnimeList = [];
            state.loadingAllAnime = true;
        },
        [getAnimeByGenreThunk.fulfilled]: (state, action) => {
            state.allAnimeList = action.payload;
            state.loadingAllAnime = false;
        },
        [getRecentlyReviewedAnimeByUsernameThunk.pending]: (state, action) => {
            state.recentlyReviewedAnimeList = [];
            state.loadingRecentlyReviewedAnime = true;
        },
        [getRecentlyReviewedAnimeByUsernameThunk.fulfilled]: (state, action) => {
            state.recentlyReviewedAnimeList = action.payload
            state.loadingRecentlyReviewedAnime = false;
        },
        [searchAnimeThunk.pending]: (state, action) => {
            state.loadingSearchedAnime = true;
            state.searchedAnimeList = [];
        },
        [searchAnimeThunk.fulfilled]: (state, action) => {
            state.loadingSearchedAnime = false;
            state.searchedAnimeList = action.payload
        },
        [getAnimeDetailThunk.pending]: (state, action) => {
            state.loadingDetail = true;
        },
        [getAnimeDetailThunk.fulfilled]: (state, action) => {
            state.loadingDetail = false;
            state.animeDetail = action.payload;
        }
    }
})

export default animeReducer.reducer;

