import axios from "axios";
const API_BASE = process.env.API_BASE || "http://localhost:4000/api";
const COLLECTION_API = `${API_BASE}/collections`;

export const getCollectionsByUsername = async (username) => {
    const response = await axios.get(`${COLLECTION_API}?username=${username}`);
    return response.data;
}

export const getCollectionByCollectionId = async (collectionId) => {
    const response = await axios.get(`${COLLECTION_API}/${collectionId}`);
    return response.data;
}

export const createCollection = async (body) => {
    const response = await axios.post(COLLECTION_API, body);
    return response.data;
}

export const updateCollection = async (collectionId, body) => {
    const response = await axios.put(`${COLLECTION_API}/${collectionId}`, body);
    return response.data;
}

export const deleteCollection = async (collectionId) => {
    const response = await axios.delete(`${COLLECTION_API}/${collectionId}`);
    return response.data;
}

export const getAllAnimeByCollectionIdAndUsername = async (collectionId, username) => {
    const response = await axios.get(`${COLLECTION_API}/${collectionId}/anime?username=${username}`);
    return response.data;
}

export const addAnimeToCollection = async (collectionId, animeId, username, body) => {
    const response = await axios.post(`${COLLECTION_API}/${collectionId}/anime/${animeId}?username=${username}`, body);
    return response.data;
}

export const removeAnimeFromCollection = async (collectionId, animeId, username) => {
    const response = await axios.delete(`${COLLECTION_API}/${collectionId}/anime/${animeId}?username=${username}`);
    return response.data;
}