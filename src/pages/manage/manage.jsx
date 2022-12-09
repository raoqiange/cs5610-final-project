import React, {useEffect}  from 'react';
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

        <h3>Manage user account</h3>
        <h4>Fun users</h4>
        {!getFansLoading && fan_users.map(f =>
            <li>
                <p>{f.username}</p>
                <p>{f.favorite_genre}</p>
                <button onClick={() => dispatch(deleteUserByIdThunk(f._id))}>Delete</button>
            </li>
        )}
        <h4>Forum authors</h4>
        { !getAuthorsLoading && author_users.map(a =>
            <li>
                <p>{a.username}</p>
                <p>{a.forum_limitations}</p>
                <button onClick={() => dispatch(deleteUserByIdThunk(a._id))}>Delete</button>
            </li>)}
    </>
    )
}
