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
    getUserByIdThunk,
    deleteUserByIdThunk
} from "./user-thunks";

const initialState = {
    currentUser: null,
    loading: false,
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
        },
        [userLoginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [userRegisterThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [userRegisterThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [userLogoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [userProfileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [userProfileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [getAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [getAllAdminUsersThunk.fulfilled]: (state, action) => {
            state.admin_users = action.payload
        },
        [getAllFanUsersThunk.fulfilled]: (state, action) => {
            state.fan_users = action.payload
        },
        [getAllAuthorsThunk.fulfilled]: (state, action) => {
            state.author_users = action.payload
        }
    }
})

export default userReducer.reducer;
