import axios from "axios";
const POSTS_API_URL = 'http://localhost:4000/api/posts'

export const getAllForumPosts = async () => {
    const response = await axios.get(`${POSTS_API_URL}`)
    return response.data
}

export const getForumPostById = async (postId) => {
    const response = await axios.get(`${POSTS_API_URL}/${postId}`, )
    return response.data
}

export const deleteForumPostById = async (postId) => {
    const response = await axios.delete(`${POSTS_API_URL}/${postId}`, )
    return response.data
}

export const createForumPost = async (post) => {
    const response = await axios.post(`${POSTS_API_URL}`, post)
    return response.data
}
export const updateForumPostById = async (postId, post) => {
    console.log(post)
    const response = await axios.put(`${POSTS_API_URL}/${postId}`, post)
    return response.data
}
export const getForumPostsByAuthorUsername = async (username) => {
    const response = await axios.get(`${POSTS_API_URL}/author/${username}`, )
    return response.data
}
