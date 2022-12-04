import axios from "axios";
const API_BASE = process.env.API_BASE || "http://localhost:4000/api";
const ANIME_API = `${API_BASE}/anime`;

//get all anime for non-logged-in users
export const getAllAnime = async () => {
    const response = await axios.get(`${ANIME_API}/all`);
    return response.data;
}

//get anime by genre
export const getAnimeByGenre = async (genre) => {
    const response = await axios.get(`${ANIME_API}/genres/${genre}`);
    return response.data;
}

export const getRecentlyReviewedAnimeByUsername = async (username) => {
    const response = await axios.get(`${API_BASE}/recentlyReviewedAnime?username=${username}`);
    return response.data;
}

export const searchAnime = async (animeTitle) => {
    const response = await axios.get(`${ANIME_API}/search/${animeTitle}`);
    return response.data;
}

export const getAnimeDetail = async (animeId) => {
    const response = await axios.get(`${ANIME_API}/${animeId}`);
    return response.data;
}




