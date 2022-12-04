import axios from "axios";
const API_BASE = process.env.API_BASE || "http://localhost:4000/api";
const REVIEW_API = API_BASE;

export const getReviewsByAnimeId = async (animeId) => {
    const response = await axios.get(`${REVIEW_API}/anime/${animeId}/reviews`);
    return response.data;
}

export const createReview = async (animeId, body) => {
    const response = await axios.post(`${REVIEW_API}/anime/${animeId}/reviews`, body);
    return response.data;
}
//body here refers to a object contains a review and an anime (postman)
// {
//     "review": {
//     "username": "tom",
//         "comment": "awesome!!",
//         "rating": 10
// },
//     "anime": {
//     "username": "tom",
//         "title": "cowbody bebop",
//         "ranking": 1,
//         "image": "....",
//         "thumb":"...",
//         "synopsis": "one piece is popular"
// }
// }

export const deleteReview = async (reviewId) => {
    const response = await axios.delete(`${REVIEW_API}/reviews/${reviewId}`);
    return response.data;
}

