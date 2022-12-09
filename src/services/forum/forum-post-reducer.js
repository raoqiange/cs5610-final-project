import {createSlice} from "@reduxjs/toolkit";
import {
    getAllForumPostsThunk,
    // getForumPostByIdThunk,
    getForumPostsByAuthorUsernameThunk,
    createForumPostThunk,
    updateForumPostByIdThunk,
    deleteForumPostByIdThunk
} from "./forum-post-thunks"

const initialState = {
    allPosts: [],
    authorPosts: [],
    // post: null,
    error: null,
    postsLoading: true
}

const postsReducer = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getAllForumPostsThunk.fulfilled]: (state, action) => {
            state.allPosts = action.payload;
            state.postsLoading = false;
        },
        [getAllForumPostsThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.postsLoading = false;
        },
        [getAllForumPostsThunk.pending]: (state, action) => {
            state.postsLoading = true;
        },
        // [getForumPostByIdThunk.fulfilled]: (state, action) => {
        //     state.post = action.payload;
        // },
        // [getForumPostByIdThunk.rejected]: (state, action) => {
        //     state.error = action.payload;
        // },
        [getForumPostsByAuthorUsernameThunk.fulfilled]: (state, action) => {
            state.authorPosts = action.payload;
            state.postsLoading = false;

        },
        [getForumPostsByAuthorUsernameThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.postsLoading = false;

        },
        [getForumPostsByAuthorUsernameThunk.pending]: (state, action) => {
            state.postsLoading = true;
        },
        [createForumPostThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.allPosts.push(action.payload);
        },
        [createForumPostThunk.rejected]: (state, action) => {
            state.error = action.payload
        },
        [updateForumPostByIdThunk.fulfilled]: (state, action) => {
            console.log(action.payload._id)
            const updateId = state.allPosts.findIndex((p) => p._id === action.payload._id)
            console.log(updateId)
            state.allPosts[updateId] = {
                ...state.allPosts[updateId],
                ...action.payload
            }
        },
        [updateForumPostByIdThunk.rejected]: (state, action) => {
            state.error = action.payload
            console.log(state.error)
        },
        [deleteForumPostByIdThunk.fulfilled]: (state, action) => {
            state.allPosts = state.allPosts.filter(p => p._id !== action.payload)
        },
        [deleteForumPostByIdThunk.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export default postsReducer.reducer;