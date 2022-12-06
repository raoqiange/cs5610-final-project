import {createSlice} from "@reduxjs/toolkit";
import {getCollectionsByUsernameThunk, getCollectionByCollectionIdThunk, createCollectionThunk,
    updateCollectionThunk, deleteCollectionThunk,} from "./collection-thunks";
// getAllAnimeByCollectionIdThunk,addAnimeToCollectionThunk

const initialState = {
    collections: [],
    loadingCollections: false,
    currentCollection: {},
    loadingCollection: false,
    animeInCollection: [],
    loadingAnimeInCollection: false
}

const collectionReducer = createSlice({
    name: 'collections',
    initialState,
    extraReducers: {
        [getCollectionsByUsernameThunk.pending]: (state, action) => {
            state.collections = [];
            state.loadingCollections = true;
        },
        [getCollectionsByUsernameThunk.fulfilled]: (state, action) => {
            state.collections = action.payload;
            state.loadingCollections = false;
        },
        [createCollectionThunk.fulfilled]: (state, action) => {
            state.collections.push(action.payload);
            state.loadingCollections = false;
        },
        [deleteCollectionThunk.fulfilled]: (state, action) => {
            state.collections.filter(collection => collection._id !== action.payload);
            state.loadingCollections = false;
        },
        [updateCollectionThunk.fulfilled]: (state, action) => {
            state.collections = state.collections.map(collection => {
                if (collection === action.payload.collectionId) {
                    return {...collection, ...action.payload.body};
                } else {
                    return collection;
                }
            })
            state.loadingCollections = false;
        },
        [getCollectionByCollectionIdThunk.pending]: (state, action) => {
            state.currentCollection = {};
            state.loadingCollection = true;
        },
        [getCollectionByCollectionIdThunk.fulfilled]: (state, action) => {
            state.currentCollection = action.payload;
            state.loadingCollection = false;
        },

    }
})

export default collectionReducer.reducer;