import axios from "axios";
const COMMENTS_API_URL = 'http://localhost:4000/api/comments'

export const getForumCommentByPostId = async (postId) => {
    const response = await axios.get(`${COMMENTS_API_URL}/post/${postId}`, )
    return response.data
}

export const deleteForumComment = async (commentId) => {
    const response = await axios.delete(`${COMMENTS_API_URL}/${commentId}`, )
    return response.data
}

export const createForumComment = async (comment) => {
    const response = await axios.post(`${COMMENTS_API_URL}`, comment)
    return response.data
}
export const updateForumComment = async (commentId, comment) => {
    const response = await axios.put(`${COMMENTS_API_URL}/${commentId}`, comment)
    return response.data
}

export const deleteForumCommentsByPostId = async (postId) => {
    const response = await axios.delete(`${COMMENTS_API_URL}/post/${postId}`, )
    return response.data
}
