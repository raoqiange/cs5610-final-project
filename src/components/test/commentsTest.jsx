import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
    getForumCommentByPostIdThunk,
    deleteForumCommentThunk,
    createForumCommentThunk,
    updateForumCommentThunk,
    deleteForumCommentsByPostIdThunk
} from '../../services/forum/forum-comment-thunks'

const ForumPostsTest = () => {
    const currentUser = 'tom';
    const postId = '6387f11d30490a25169272d5';
    const {
        comments,
        error,
        commentsLoading,
    } = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const [updateComment, SetUpdateComment] = useState('');
    const [newComment, SetNewComment] = useState('');

    useEffect(() => {
        dispatch(getForumCommentByPostIdThunk(postId))
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div>
                {!commentsLoading && comments.map(comment =>
                    <li key={comment._id}>
                        <p>{comment._id}</p>
                        <lable htmlFor="comment-content">content</lable>
                        <input id="comment-content" type="text" defaultValue={comment.comment} onChange={(e) => SetUpdateComment(e.target.value)}></input>
                        <p>comment from {comment.fan_username}</p>
                        <button onClick={()=>dispatch(deleteForumCommentThunk(comment._id))}>Delete</button>
                        <button onClick={()=>dispatch(updateForumCommentThunk({...comment, comment: updateComment}))}>Update</button>
                    </li>
                )
                }

                <h4>Create a new comment for post {postId}</h4>
                <lable htmlFor="comment-content-new">New comment on this post</lable>
                <input id="pcomment-content-new" type="text" defaultValue={newComment} onChange={(e) => SetNewComment(e.target.value)}></input>
                <p>{currentUser.username}</p>
                <button onClick={() => dispatch(createForumCommentThunk({fan_username: currentUser, comment: newComment, post_id: postId}))}>Create</button>
            </div>


        </>
    )
}

export default ForumPostsTest;
