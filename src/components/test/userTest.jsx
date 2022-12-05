import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userLoginThunk, userLogoutThunk, userProfileThunk, userRegisterThunk,
getAllFanUsersThunk, getAllUsersThunk, getAllAdminUsersThunk, getAllAuthorsThunk, getUserByIdThunk, deleteUserByIdThunk} from "../../services/users/user-thunks";

const UserTest = () => {
    const {
        currentUser,
        users,
        fan_users,
        admin_users,
        author_users
    } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllFanUsersThunk());
    }, [dispatch])
    useEffect(() => {
        dispatch(getAllAdminUsersThunk());
    }, [dispatch])
    useEffect(() => {
        dispatch(getAllAuthorsThunk());
    }, [dispatch])
    useEffect(() => {
        dispatch(getAllUsersThunk());
    }, [dispatch])
    const registerClickHandler = () => {
        const newUser = {
            'username': document.getElementById('username').value,
            'password': document.getElementById('password').value,
            'role': 'FAN',
            'favorite_genre': document.getElementById('fav-genre').value
        }
        dispatch(userRegisterThunk(newUser));
    }
    const loginClickHandler = () => {
        const user = {
            'username': document.getElementById('login-username').value,
            'password': document.getElementById('login-password').value,
        }
        dispatch(userLoginThunk(user));
    }
    const logoutClickHandler = () => {
        dispatch(userLogoutThunk());
    }
    const profileClickHandler = () => {
        dispatch(userProfileThunk());
    }

    const deleteUserClickHandler = () => {
        const idToDelete = document.getElementById('del-id').value
        dispatch(deleteUserByIdThunk(idToDelete));
    }
    return (
        <>
            <h1>lOG</h1>
            <h4>Register a fan</h4>
            <label for="username">Username</label>
            <input type="text" id="username"></input>
            <label for="password">Password</label>
            <input type="text" id="password"></input>
            <label for="fav-genre">Favorite genre</label>
            <input type="text" id="fav-genre"></input>
            <button onClick={registerClickHandler}>Register</button>

            <h4>Login a fan</h4>
            <label for="login-username">Username</label>
            <input type="text" id="login-username"></input>
            <label for="login-password">Password</label>
            <input type="text" id="login-password"></input>
            <button onClick={loginClickHandler}>Log in</button>

            <h4>Logout a fan</h4>
            <button onClick={logoutClickHandler}>Log out</button>

            <h4>Profile</h4>
            <button onClick={profileClickHandler}>Profile</button>
            <p>{currentUser && currentUser.username}</p>
            <p>{currentUser && currentUser.role}</p>

            <h1>Print Users</h1>

            <h4>All Users</h4>
            <div>
                { users.map(user => <li>{user.username}</li>)}
            </div>
            <h4>All Admin Users</h4>
            <div>
                { admin_users.map(user => <li>{user.username}</li>)}
            </div>
            <h4>All Author Users</h4>
            <div>
                { author_users.map(user => <li>{user.username}</li>)}
            </div>
            <h4>All Fan Users</h4>
            <div>
                { fan_users.map(user => <li>{user.username}</li>)}
            </div>

            <h1>Delete</h1>
            <input id="del-id" placeholder="fan id to delete"></input>
            <button onClick={deleteUserClickHandler}>Delete</button>
            </>
    )
};

export default UserTest;