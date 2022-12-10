import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./forum-post-service"

export const getAllForumPostsThunk = createAsyncThunk(
    '/posts/getAllForumPosts',
    async () => await service.getAllForumPosts()
)

export const getForumPostByIdThunk = createAsyncThunk(
    '/posts/getForumPostById',
    async (postId) => await service.getForumPostById(postId)
)

export const getForumPostsByAuthorUsernameThunk = createAsyncThunk(
    '/posts/getForumPostsByAuthorUsername',
    async (username) => await service.getForumPostsByAuthorUsername(username)
)

export const createForumPostThunk = createAsyncThunk(
    '/posts/createForumPost',
    async (post) => await service.createForumPost(post)
)

export const updateForumPostByIdThunk = createAsyncThunk(
    '/posts/updateForumPostById',
    async (post) => await service.updateForumPostById(post._id, post)
)

export const deleteForumPostByIdThunk = createAsyncThunk(
    '/posts/deleteForumPostById',
    async (postId) => {
        await service.deleteForumPostById(postId);
        return postId;
    }
)

