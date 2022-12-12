import "./public-profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserByUsernameThunk} from "../../services/users/user-thunks"
import {useParams} from "react-router-dom";
import Profile from "../../pages/settings/Settings";

export default function PublicProfile() {
    const {user, currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const {username} = useParams();
    useEffect(() => {
        dispatch(getUserByUsernameThunk(username));
    }, [])
    if (!user) {
        return <p>This user does not exist</p>
    }
    if (currentUser && user.username === currentUser.username) {
        return <Profile/>
    }
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{display: "none"}}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <text style={{width: "340px"}} type="text" name="name">{user && user.username}</text>
                    {user && user.role === 'FAN' ?
                        <>
                            <label>Favorite anime genre</label>
                            <text  style={{width: "340px"}} id="new-fav-genre" type="text"/>
                                   {user && user.favorite_genre} </> :
                        <></>
                    }
                    {user && user.role === 'FORUM_AUTHOR' ?
                        <>
                            <label>Forum limitations </label>
                            <text type="text" >{user && user.forum_limitations}</text>
                        </> :
                        <></>
                    }
                    {user && user.role === 'ADMIN' ?
                        <>
                            <label>Email</label>
                            <text style={{width: "340px"}} id="new-email" type="text" />{user && user.email} </> :
                        <></>
                    }
                </form>

            </div>

        </div>
    );
}
