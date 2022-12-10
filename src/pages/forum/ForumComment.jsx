import "./forum.css";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {
    getForumCommentByPostIdThunk,
    deleteForumCommentThunk,
    createForumCommentThunk,
    updateForumCommentThunk,
    deleteForumCommentsByPostIdThunk
} from "../../services/forum/forum-comment-thunks";
import {
    getForumPostByIdThunk
} from "../../services/forum/forum-post-thunks"

export default function ForumComment() {
    const {currentUser} = useSelector(state => state.users)
    const {post, singlePostLoading} = useSelector(state => state.posts)
    const {
        comments, commentsLoading
    } = useSelector(state => state.comments)
    const {postId} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch((getForumPostByIdThunk(postId)));
    }, [dispatch])
    useEffect(() => {
        dispatch((getForumCommentByPostIdThunk(postId)));
    }, [dispatch])
    const publishCommentClickHandler = () => {
        const newComment = document.getElementById("new-comment").value;
        if (!newComment) {
            alert("Comment can not be empty!")
        } else {
            dispatch(createForumCommentThunk(
                {
                    comment: newComment,
                    post_id: post._id,
                    fan_username: currentUser.username
                }))
        }
    }
    return (
        <>
            <div className="writeFormGroup"  >
                <div className="managesWrapper">
            <h4>Post</h4>
            {!singlePostLoading && post &&
            <div>
                <p>{post.title}</p>
                <p> {post.description} </p>
                <p>Published by
                    <Link to={'/public/' + post.author_username}> {post.author_username}</Link>
                   </p>
                <br/>
            </div>
            }

            <h4>Comments</h4>
            {!commentsLoading && comments && comments.map(m =>
                <div>
                    <p>{m.comment}</p>
                    <p>By <Link to={'/public/' + m.fan_username}>{m.fan_username}</Link></p>
                    {currentUser && (currentUser.role === 'ADMIN' || (post && currentUser.role === 'FORUM_AUTHOR' && currentUser.username === post.author_username))&&
                        <button onClick={() => dispatch(deleteForumCommentThunk(m._id))}>Delete</button>
                    }
                    <br/>
                </div>
            )
            }
                </div>
            </div>
            {currentUser &&
            <div className="write">
                <form className="writeForm">
                    <div className="writeFormGroup">
          <textarea
              id="new-comment"
              className="writeInput writeText"
              placeholder="What do you think about this..."
              type="text"
              autoFocus={true}/>
                    </div>
                    <button className="writeSubmit" type="submit" onClick={publishCommentClickHandler}>
                        Publish
                    </button>
                </form>
            </div>
            }
        </>
    );
}
