import axios from "axios";
const API_BASE = process.env.API_BASE || "http://localhost:4000/api";
const ANIME_GENRE_API = `${API_BASE}/anime/genres`;

export const getAllAnimeGenres = async () => {
    const response = await axios.get(ANIME_GENRE_API);
    return response.data;
}