import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './genres-service';

export const getAllAnimeGenres = createAsyncThunk(
    'genres/getAllGenres',
    async () => await service.getAllAnimeGenres()
)