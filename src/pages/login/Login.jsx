import "./login.css";
import {Link} from "react-router-dom";
import React from 'react';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Please enter your email here" />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Please enter your password here" />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
            <Link className="Link" to="/register">Register</Link>
        </button>
    </div>
  );
}
