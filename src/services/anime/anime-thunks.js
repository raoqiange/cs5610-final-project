import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './anime-service';

export const getAllAnimeThunk = createAsyncThunk(
    'anime/getAllAnime',
    async () => await service.getAllAnime()
)

export const getAnimeByGenreThunk = createAsyncThunk(
    'anime/getAnimeByGenre',
    async (genre) => await service.getAnimeByGenre(genre)
)

export const getRecentlyReviewedAnimeByUsernameThunk = createAsyncThunk(
    'anime/getRecentlyReviewedAnime',
    async (username) => await service.getRecentlyReviewedAnimeByUsername(username)
)

export const searchAnimeThunk = createAsyncThunk(
    'anime/searchAnime',
    async (animeTitle) => await service.searchAnime(animeTitle)
)

export const getAnimeDetailThunk = createAsyncThunk(
    'anime/getAnimeDetail',
    async (animeId) => await service.getAnimeDetail(animeId)
)

