import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './collection-service';

export const getCollectionsByUsernameThunk = createAsyncThunk(
    'collections/getCollectionsByUser',
    async (username) => await service.getCollectionsByUsername(username)
)

export const getCollectionByCollectionIdThunk = createAsyncThunk(
    'collections/getCollectionByCollectionId',
    async (collectionId) => await service.getCollectionByCollectionId(collectionId)
)

export const createCollectionThunk = createAsyncThunk(
    'collections/createCollection',
    async (body) => await service.createCollection(body)
)


export const updateCollectionThunk = createAsyncThunk(
    'collections/updateCollection',
    async ({collectionId, body}) => {
        await service.updateCollection(collectionId, body);
        return {collectionId, body};
    }
)

export const deleteCollectionThunk = createAsyncThunk(
    'collections/deleteCollection',
    async (collectionId) => {
        await service.deleteCollection(collectionId);
        return collectionId;
    }
)

export const getAllAnimeByCollectionIdThunk = createAsyncThunk(
    'collections/getAnimeInCollection',
    async ({collectionId, username}) => await service.getAllAnimeByCollectionIdAndUsername(collectionId, username)
)

export const addAnimeToCollectionThunk = createAsyncThunk(
    'collections/addAnimeToCollection',
    async ({collectionId, animeId, username, body}) => await service.addAnimeToCollection(collectionId, animeId, username, body)
)
//body---
// {    "anime": {
//         "username": "nerd",
//         "title": "cowbody bebop",
//         "ranking": 1,
//         "image": "....",
//         "thumb":"...",
//         "synopsis": "one piece is popular"
// }
// }

export const removeAnimeFromCollectionThunk = createAsyncThunk(
    'collections/removeAnimeFromCollection',
    async ({collectionId, animeId, username}) => {
        await service.removeAnimeFromCollection(collectionId, animeId, username)
        return animeId;
    }
)



