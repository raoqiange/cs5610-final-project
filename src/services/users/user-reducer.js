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
    getUserByUsernameThunk,
    deleteUserByIdThunk
} from "./user-thunks";
import {getUserByName} from "./user-service";

const initialState = {
    currentUser: null,
    loading: false,
    getUsersLoading: false,
    getFansLoading: false,
    getAuthorsLoading: false,
    loginLoading: false,
    deleteUserLoading: false,
    users: [],
    admin_users: [],
    fan_users: [],
    author_users: [],
    error: null,
    user: null
}

const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [userLoginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.error = null
            state.loading = false
        },
        [userLoginThunk.rejected]: (state, action) => {
            state.error = action.payload
            console.log(state.error)
            state.currentUser = null
            state.loading = false
        },
        [userLoginThunk.pending]: (state, action) => {
            state.loading = true
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
            console.log("rejected")
        },
        [userRegisterThunk.pending]: (state, action) => {
            state.loading = true
            state.error = null
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
            state.getUsersLoading = false
        },
        [getAllUsersThunk.pending]: (state, action) => {
            state.getUsersLoading = true
        },
        [getAllAdminUsersThunk.fulfilled]: (state, action) => {
            state.admin_users = action.payload
            state.error = null
        },
        [getAllAdminUsersThunk.pending]: (state, action) => {
            state.admin_users = action.payload
            state.error = null
        },
        [getAllFanUsersThunk.fulfilled]: (state, action) => {
            state.fan_users = action.payload
            state.error = null
            state.getFansLoading = false
        },
        [getAllFanUsersThunk.pending]: (state, action) => {
            state.getFansLoading = true
        },
        [getAllAuthorsThunk.fulfilled]: (state, action) => {
            state.author_users = action.payload
            state.error = null
            state.getAuthorsLoading = false
        },
        [getAllAuthorsThunk.pending]: (state, action) => {
            state.getAuthorsLoading = true
        },
        [updateUserProfileByIdThunk.fulfilled]: (state, action) => {
            state.currentUser = {
                ...state.currentUser,
                ...action.payload
            }
            console.log("newProfile in reducer")
            console.log(state.currentUser)
            state.error = null
        },
        [getUserByUsernameThunk.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [deleteUserByIdThunk.fulfilled]: (state, action) => {
            state.users = state.users.filter(c => c._id !== action.payload)
            state.fan_users = state.fan_users.filter(c => c._id !== action.payload)
            state.author_users = state.author_users.filter(c => c._id !== action.payload)
        },
        [deleteUserByIdThunk.pending]: (state, action) => {
            state.deleteUserLoading = false;
        },
        [deleteUserByIdThunk.rejected]: (state, action) => {
            state.deleteUserLoading = true;
        }
    }
})

export default userReducer.reducer;
