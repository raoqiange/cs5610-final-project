import {createSlice} from "@reduxjs/toolkit";
import {
    userLoginThunk,
    userLogoutThunk,
    userProfileThunk,
    userRegisterThunk,
    getAllUsersThunk,
    getAllFanUsersThunk,
    getAllAdminUsersThunk,
    getAllAuthorsThunk,
    updateUserProfileByIdThunk,
    getUserByIdThunk,
    deleteUserByIdThunk
} from "./user-thunks";

const initialState = {
    currentUser: null,
    loading: false,
    loginLoading: false,
    users: [],
    admin_users:[],
    fan_users:[],
    author_users:[],
    error: null
}

const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: {
        [userLoginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.error = null
            state.loginLoading = false
        },
        [userLoginThunk.rejected]: (state, action) => {
            state.error = action.payload
            console.log(state.error)
            state.currentUser = null
            state.loginLoading = false
        },
        [userLoginThunk.pending]: (state, action) => {
            state.loginLoading = true
        },
        [userRegisterThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.error = null
            state.loading = false
        },
        [userRegisterThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
            state.loading = false
        },
        [userRegisterThunk.pending]: (state, action) => {
            state.loading = true
        },

        [userLogoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
            state.error = null
            state.loading = false;
        },
        [userLogoutThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [userProfileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.error = null;
            state.loading = false;
        },
        [userProfileThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [userProfileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
            state.loading = false;
        },
        [getAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.error = null
        },
        [getAllAdminUsersThunk.fulfilled]: (state, action) => {
            state.admin_users = action.payload
            state.error = null
        },
        [getAllFanUsersThunk.fulfilled]: (state, action) => {
            state.fan_users = action.payload
            state.error = null
        },
        [getAllAuthorsThunk.fulfilled]: (state, action) => {
            state.author_users = action.payload
            state.error = null
        },
        [updateUserProfileByIdThunk.fulfilled]: (state, action) => {
            state.currentUser = {
                ...state.currentUser,
                ...action.payload
            }
            console.log("newProfile in reducer")
            console.log(state.currentUser)
            state.error = null
        }
    }
})

export default userReducer.reducer;
