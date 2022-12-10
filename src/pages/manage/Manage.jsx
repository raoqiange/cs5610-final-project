import React, {useEffect}  from 'react';
import "./manage.css";
import {useDispatch, useSelector} from "react-redux";
import {
    // getAllUsersThunk,
    getAllFanUsersThunk,
    getAllAuthorsThunk,
    deleteUserByIdThunk,
    // getAllAdminUsersThunk,
} from "../../services/users/user-thunks";
import Login from "../login/Login";
export default function Manage() {
    const {
        // users,
        // admin_users,
        currentUser,
        fan_users,
        author_users,
        getFansLoading,
        getAuthorsLoading,
    } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllFanUsersThunk());
    }, [dispatch])
    useEffect(() => {
        dispatch(getAllAuthorsThunk());
    }, [dispatch])
    if (!currentUser) {
        return <Login/>
    }
    return (
    <>

        <div className="manages">
            <div className="managesWrapper">
                <div className="settingsTitle">
        <span className="manageTitleUpdate">Manage User Account</span>
                </div>
        <div className="managesMargin1"><label><b>Fun Users</b></label></div>
        <div className="managesList">
        {!getFansLoading && fan_users.map(f =>
            <ul className="managesList"  >
            <li className="managesTitleMargin" >
                <div className="managesPP">
                    <img
                        src="https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg"
                        alt=""
                />
                </div>
                <p>{f.username}</p>
                <p>{f.favorite_genre}</p>
                <button className="managesDeleteButton" onClick={() => dispatch(deleteUserByIdThunk(f._id))}>Delete</button>
            </li>
            </ul>
        )}

       <div className="managesMargin2"><label><b>Forum Authors</b></label></div>
        { !getAuthorsLoading && author_users.map(a =>
            <ul className="managesList"  >
            <li className="managesTitleMargin">
                <div className="managesPP">
                    <img
                        src="https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg"
                        alt=""
                    />
                </div>
                <p>{a.username}</p>
                {/*<p>{a.forum_limitations}</p>*/}
                <button className="managesDeleteButton" onClick={() => dispatch(deleteUserByIdThunk(a._id))}>Delete</button>
            </li>
            </ul>
        )}
            </div>
            </div>
        </div>
    </>
    )
}
