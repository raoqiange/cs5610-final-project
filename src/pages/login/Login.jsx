import "./login.css";
import {Link} from "react-router-dom";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userLoginThunk} from "../../services/users/user-thunks";
import Profile from "../settings/Settings";

export default function Login() {
    const {
        currentUser,
        loginLoading
    } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const loginClickHandler = () => {
        const loginUsername = document.getElementById('login-username').value;
        const loginPassword = document.getElementById('login-password').value;
        const user = {
            'username': loginUsername,
            'password': loginPassword,
        }
        try {
            dispatch(userLoginThunk(user))
        } catch (e) {
        }
    }
    if (currentUser) {
        return <Profile />
    }
    return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input  id="login-username" className="loginInput" type="text" placeholder="Please enter your email here" />
        <label>Password</label>
        <input id="login-password" className="loginInput" type="password" placeholder="Please enter your password here" />
        <button className="loginButton" onClick={loginClickHandler}>Login</button>
      </form>
        <button className="loginRegisterButton">
            <Link className="Link" to="/register">Register</Link>
        </button>
    </div>
  );
}
