import {createSlice} from "@reduxjs/toolkit";
import {
    getForumCommentByPostIdThunk,
    deleteForumCommentThunk,
    createForumCommentThunk,
    updateForumCommentThunk,
    deleteForumCommentsByPostIdThunk
} from "./forum-comment-thunks"

const initialState = {
    comments:[],
    commentsLoading: true
}

const commentsReducer = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [getForumCommentByPostIdThunk.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.commentsLoading = false;
        },
        [getForumCommentByPostIdThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.commentsLoading = false;
        },
        [getForumCommentByPostIdThunk.pending]: (state, action) => {
            state.commentsLoading = true;
        },

        [createForumCommentThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.comments.push(action.payload);
        },
        [createForumCommentThunk.rejected]: (state, action) => {
            state.error = action.payload
        },
        [updateForumCommentThunk.fulfilled]: (state, action) => {
            console.log(action.payload._id)
            const updateId = state.comments.findIndex((c) => c._id === action.payload._id)
            console.log(updateId)
            state.comments[updateId] = {
                ...state.comments[updateId],
                ...action.payload
            }
        },
        [updateForumCommentThunk.rejected]: (state, action) => {
            state.error = action.payload
            console.log(state.error)
        },
        [deleteForumCommentThunk.fulfilled]: (state, action) => {
            state.comments = state.comments.filter(c => c._id !== action.payload)
        },
        [deleteForumCommentThunk.rejected]: (state, action) => {
            state.error = action.payload
        },
        [deleteForumCommentsByPostIdThunk.fulfilled]:(state, action) => {
            state.comments = [];
        },
        [deleteForumCommentsByPostIdThunk.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export default commentsReducer.reducer;