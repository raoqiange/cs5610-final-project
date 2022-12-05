import "./register.css"
import {Link} from "react-router-dom";
import React from 'react';

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Please enter your username here" />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Please enter your email here" />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Please enter your password here" />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">
            <Link className="Link" to="/login">Login</Link>
        </button>
    </div>
    )
}
