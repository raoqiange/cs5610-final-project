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
//body --
// {    "anime": {
//          "username": "tom",
//         "title": "cowbody bebop",
//         "ranking": 1,
//         "image": "....",
//         "thumb":"...",
//         "synopsis": "collect"
// }
// }

export const updateCollectionThunk = createAsyncThunk(
    'collections/updateCollection',
    async (collectionId, body) => await service.updateCollection(collectionId, body)
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
    async (collectionId, username) => await service.getAllAnimeByCollectionIdAndUsername(collectionId, username)
)

export const addAnimeToCollectionThunk = createAsyncThunk(
    'collections/addAnimeToCollection',
    async (collectionId, animeId, username) => await service.addAnimeToCollection(collectionId, animeId, username)
)

