import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
    getAllForumPostsThunk,
    getForumPostsByAuthorUsernameThunk,
    createForumPostThunk,
    getForumPostByIdThunk,
    updateForumPostByIdThunk,
    deleteForumPostByIdThunk
} from '../../services/forum/forum-post-thunks'

const ForumPostsTest = () => {
    const currentUser = 'tom';
    const {
        allPosts,
        authorPosts,
        error,
        postsLoading,
    } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const [newPostTitle, SetNewPostTitle] = useState('');
    const [updatePostTitle, SetUpdatePostTitle] = useState('');
    const [updatePostDescription, SetUpdatePostDescription] = useState('');
    const [newPostDescription, SetNewPostDescription] = useState('');
    useEffect(() => {
        dispatch(getAllForumPostsThunk())
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div>
                {!postsLoading && allPosts.map(post =>
                    <li key={post._id}>
                        <p>{post._id}</p>
                        <lable htmlFor="post-title">Title</lable>
                        <input id="post-title" type="text" defaultValue={post.title} onChange={(e) => SetUpdatePostTitle(e.target.value)}></input>
                        <lable htmlFor="post-description">description</lable>
                        <input id="post-description" type="text" defaultValue={post.description} onChange={(e) => SetUpdatePostDescription(e.target.value)}></input>
                        <p>{post.author_username}</p>
                        <button onClick={()=>dispatch(deleteForumPostByIdThunk(post._id))}>Delete</button>
                        <button onClick={()=>dispatch(updateForumPostByIdThunk({...post, title: updatePostTitle, description: updatePostDescription}))}>Update</button>
                    </li>
                )
                }

                <button onClick={() => dispatch(getForumPostsByAuthorUsernameThunk(currentUser))}>
                    Get all posts created by tom
                </button>
                {!postsLoading && authorPosts.map(post =>
                    <li key={post._id}>
                        <p>{post._id}</p>
                        <p>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.author_username}</p>
                    </li>
                )
                }

                <h4>Create a new post</h4>
                <lable htmlFor="post-title-new">Title</lable>
                <input id="post-title-new" type="text" defaultValue={newPostTitle} onChange={(e) => SetNewPostTitle(e.target.value)}></input>
                <lable htmlFor="post-description-new">description</lable>
                <input id="post-description-new" type="text" defaultValue={newPostDescription} onChange={(e) => SetNewPostDescription(e.target.value)}></input>
                <p>{currentUser.username}</p>
                <button onClick={() => dispatch(createForumPostThunk({author_username: currentUser, title: newPostTitle, description: newPostDescription}))}>Create</button>
            </div>


        </>
    )
}

export default ForumPostsTest;
