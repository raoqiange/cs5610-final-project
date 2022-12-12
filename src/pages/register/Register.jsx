import "./register.css"
import {Link} from "react-router-dom";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userRegisterThunk} from "../../services/users/user-thunks";
import Profile from "../settings/Settings";

export default function Register() {
    const {
        currentUser,
        loading,
        error
    } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const registerClickHandler = () => {
        let role;
        const val = document.getElementById("user-type").value;
        if (val === '1') {
            role = 'FAN'
        } else if (val === '2') {
            role = 'FORUM_AUTHOR'
        } else if (val === '3') {
            role = 'ADMIN'
        }
        const newUser = {
            'username': document.getElementById('username').value,
            'password': document.getElementById('password').value,
             'role': role,
            'forum_limitations': 10
        }
        try {
            dispatch(userRegisterThunk(newUser));
        } catch (e) {
            console.log("error")
        }
    }
    if (currentUser) {
        return  <Profile />
    }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input id="username" className="registerInput" type="text" placeholder="Please enter your username here" />
        <label>Password</label>
        <input id="password" className="registerInput" type="password" placeholder="Please enter your password here" />
          <lable for="user-type" className="registerForm">Choose user type</lable>
          <select id="user-type" className="registerOption">
              <option value="1">Fan User</option>
              <option value="2">Forum Author</option>
              <option value="3">Admin</option>
          </select>
        <button className="registerButton" onClick={registerClickHandler}>Register</button>
      </form>
        <button className="registerLoginButton">
            <Link className="Link" to="/login">Login</Link>
        </button>
    </div>
    )
}
