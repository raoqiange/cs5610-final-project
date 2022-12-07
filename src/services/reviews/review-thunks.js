import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './review-service';

export const getReviewsByAnimeIdThunk = createAsyncThunk(
    'reviews/getReviewsByAnimeId',
    async (animeId) => await service.getReviewsByAnimeId(animeId)
)

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async ({animeId, body}) => await service.createReview(animeId, body)
)

export const deleteReviewThunk = createAsyncThunk(
    'review/deleteReview',
    async (reviewId) => {
        await service.deleteReview(reviewId)
        return reviewId;
    }
)