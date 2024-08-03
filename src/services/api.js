import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getAnimeFullById(id) {
    return api.get(`/anime/${id}/full`);
  },
  getTopAnimes(page = 1) {
    return api.get(`/top/anime?page=${page}`);
  },
  searchAnimes(query, page = 1) {
    return api.get(`/anime?q=${query}&page=${page}`);
  },
  getAnimeDetails(id) {
    return api.get(`/anime/${id}`);
  },
};
