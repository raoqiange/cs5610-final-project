import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React, {useState} from 'react';
import CollectionList from "../../components/collections/CollectionList";
import {useDispatch, useSelector} from "react-redux";
import {updateUserProfileByIdThunk, userProfileThunk} from "../../services/users/user-thunks";
import Login from "../login/Login";

export default function Settings() {
    const {currentUser} = useSelector(state => state.users);
    if (!currentUser) {
        return <Login/>
    }
    console.log(currentUser)
    const dispatch = useDispatch();
    const updateProfileClickHandler = () => {
        const newPassword = document.getElementById('new-password').value;
        if (!newPassword) {
            alert("Password can not be empty")
            return;
        }
        var newProfile = {
            ...currentUser,
            'password': newPassword
        }
        if (currentUser.role === 'ADMIN') {
            newProfile = {
                ...newProfile,
                'email': document.getElementById('new-email').value,
            }
        } else if (currentUser.role === 'FAN') {
            newProfile = {
                ...newProfile,
                'favorite_genre': document.getElementById('new-fav-genre').value
            }
        }
        dispatch(updateUserProfileByIdThunk(newProfile))
        dispatch(userProfileThunk())
    }
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
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
                    <text style={{width: "340px"}} type="text"  name="name">{currentUser && currentUser.username}</text>
                    <label>Password</label>
                    <input style={{width: "340px"}} type="password" defaultValue={currentUser && currentUser.password} name="password"
                           id="new-password"/>

                    {currentUser && currentUser.role === 'FAN' ?
                        <>
                            <label>Your favorite anime genre</label>
                            <input  style={{width: "340px"}} id="new-fav-genre" type="text"
                                   defaultValue={currentUser && currentUser.favorite_genre}/> </> :
                        <></>
                    }
                    {currentUser && currentUser.role === 'FORUM_AUTHOR' ?
                        <>
                            <label>Your forum limitations </label>
                            <input type="text" value={currentUser && currentUser.forum_limitations}/>
                        </> :
                        <></>
                    }
                    {currentUser && currentUser.role === 'ADMIN' ?
                        <>
                            <label>Your email</label>
                            <input style={{width: "340px"}} id="new-email" type="text" defaultValue={currentUser && currentUser.email}/> </> :
                        <></>
                    }
                    <button className="settingsSubmitButton" onClick={updateProfileClickHandler}>Update
                    </button>

                    {
                        currentUser && currentUser.role !== "ADMIN" &&
                        <>
                            <div className="settingsTitleMargin">
                                <span className="settingsTitleUpdate">My Collections...</span>
                            </div>
                            <div className="collection">
                            <CollectionList/>
                            </div>
                        </>
                    }


                </form>

            </div>


            {/*<Sidebar />*/}

        </div>
    );
}
