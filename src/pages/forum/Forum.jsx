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

            <div className="writeFormGroup"  >
            <div className="managesWrapper">
            {/*add style for post here please*/}
            {!postsLoading && allPosts.map(p =>
                <div className="forumFormStyle">
                    <p className="forumFontSize">
                        <Link to={'/public/' + p.author_username}>
                            {p.author_username}</Link>
                        : {p.title}</p>
                    <Link to={'/post_comments/' + p._id}>
                        <p className="forumFontStyle"> {p.description} </p>
                    </Link>
                    {currentUser &&
                    (currentUser.role === 'ADMIN' || (currentUser.role === 'FORUM_AUTHOR' && currentUser.username === p.author_username)) &&
                    <button className="forumsDeleteButton" onClick={()=>dispatch(deleteForumPostByIdThunk(p._id))}>Delete</button>
                    }
                    <br/>

                </div>
            )}
            </div>
            </div>
            {currentUser && currentUser.role === 'FORUM_AUTHOR' &&
            <div className="write">
                <form className="writeForm">
                    <div className="writeFormGroup" className="forumMargin">
                        <input
                            id="new-post-title"
                            className="writeInput"
                            placeholder="Please Enetr Your Title"
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
