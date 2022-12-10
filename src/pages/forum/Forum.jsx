import "./forum.css";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    getAllForumPostsThunk,
    getForumPostsByAuthorUsernameThunk,
    createForumPostThunk,
    updateForumPostByIdThunk,
    deleteForumPostByIdThunk
} from "../../services/forum/forum-post-thunks"

export default function Forum() {
    const {currentUser} = useSelector(state => state.users)
    const {
        allPosts,
        authorPosts,
        post,
        postsLoading
    } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllForumPostsThunk());
    }, [])
    const createForumPostClickHandler = () => {
        const newPostTitle = document.getElementById("new-post-title").value;
        const newPostDescription = document.getElementById("new-post-description").value;
        if (!newPostTitle) {
            alert("Title can not be empty")
        } else {
            dispatch(createForumPostThunk({
                title: newPostTitle,
                description: newPostDescription,
                author_username: currentUser.username
            }))
        }
    }
    return (
        <div>
            <img
                className="writeImg"
                src="https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg"
                alt=""/>
            {/*add style for post here please*/}
            {!postsLoading && allPosts.map(p =>
                <div>
                    <p>
                        <Link to={'/public/' + p.author_username}>
                            {p.author_username}</Link>
                        : {p.title}</p>
                    <Link to={'/post_comments/' + p._id}>
                        <p> {p.description} </p>
                    </Link>
                    {currentUser &&
                    (currentUser.role === 'ADMIN' || (currentUser.role === 'FORUM_AUTHOR' && currentUser.username === p.author_username)) &&
                    <button onClick={()=>dispatch(deleteForumPostByIdThunk(p._id))}>Delete</button>
                    }
                    <br/>
                </div>
            )}
            {currentUser && currentUser.role === 'FORUM_AUTHOR' &&
            <div className="write">
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"></i>
                        </label>
                        <input id="fileInput" type="file" style={{display: "none"}}/>
                        <input
                            id="new-post-title"
                            className="writeInput"
                            placeholder="Title"
                            type="text"
                            autoFocus={true}/>
                    </div>
                    <div className="writeFormGroup">
                        <textarea id="new-post-description" className="writeInput writeText" placeholder="Tell your story..." type="text" autoFocus={true}/>
                    </div>
                    <button className="writeSubmit" type="submit" onClick={createForumPostClickHandler}>
                        Publish
                    </button>
                </form>
            </div>
            }
        </div>
    );
}
