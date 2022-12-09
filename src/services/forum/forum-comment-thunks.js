import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./forum-comment-service"

export const getForumCommentByPostIdThunk = createAsyncThunk(
    '/comments/getForumCommentByPostId',
    async (postId) => await service.getForumCommentByPostId(postId)
)

export const deleteForumCommentThunk = createAsyncThunk(
    '/comments/deleteForumComment',
    async (commentId) => await service.deleteForumComment(commentId)
)

export const createForumCommentThunk = createAsyncThunk(
    '/comments/createForumComment',
    async (comment) => await service.createForumComment(comment)
)

export const updateForumCommentThunk = createAsyncThunk(
    '/comments/updateForumComment',
    async (comment) => await service.updateForumComment(comment._id, comment)
)

export const deleteForumCommentsByPostIdThunk = createAsyncThunk(
    '/comments/deleteForumCommentsByPostId',
    async (postId) => await service.deleteForumCommentsByPostId(postId)
)


