import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

export default {
  getTopAnimes(page = 1) {
    return api.get(`/top/anime?page=${page}`);
  },
  getTopManga(page = 1) {
    return api.get(`/top/manga?page=${page}`);
  },
  getRecentAnimeRecommendations(page = 1) {
    return api.get(`/recommendations/anime?page=${page}`);
  },
  getSeasonalAnimes(year = new Date().getFullYear(), season = "summer") {
    return api.get(`/seasons/${year}/${season}`);
  },
  getSpringAnime(year = new Date().getFullYear(), season = "spring") {
    return api.get(`/seasons/${year}/${season}`);
  },
  getWinterAnime(year = new Date().getFullYear(), season = "Winter") {
    return api.get(`/seasons/${year}/${season}`);
  },
  getSeasonalManga(year = new Date().getFullYear(), season = "summer") {
    return api.get(`/seasons/${year}/${season}`);
  },
  // Anime 2023
  getSummerAnime2023(year = 2023, season = "summer") {
    return api.get(`/seasons/${year}/${season}`);
  },
  getSpringAnime2023(year = 2023, season = "spring") {
    return api.get(`/seasons/${year}/${season}`);
  },
  getWinterAnime2023(year = 2023, season = "Winter") {
    return api.get(`/seasons/${year}/${season}`);
  },
  getFallAnime2023(year = 2023, season = "fall") {
    return api.get(`/seasons/${year}/${season}`);
  },

  getSeasonalManga2023(year = 2023, season = "summer") {
    return api.get(`/seasons/${year}/${season}`);
  },

  getTopCharacters(page = 1) {
    return api.get(`/top/characters?page=${page}`);
  },
  searchAnimes(query, page = 1) {
    return api.get(`/anime?q=${query}&page=${page}`);
  },
  getAnimeDetails(id) {
    return api.get(`/anime/${id}/full`);
  },
  getMangaDetails(id) {
    return api.get(`/manga/${id}/full`);
  },
  getCharacterDetails(id) {
    return api.get(`/characters/${id}/full`);
  },
  getAllAnime(page = 1) {
    return api.get(`/anime?page=${page}`);
  },
  getRecentlyAddedAnimes(page = 1, limit = 15) {
    return api.get(`/anime?page=${page}&limit=${limit}`);
  },
  getCharacterByAnime(id) {
    return api.get(`/anime/${id}/characters`);
  },

  getJadwal(page = 1) {
    return api.get(`/schedules?page=${page}`);
  },

  getAnimeStaff(id) {
    return api.get(`/anime/${id}/staff`);
  },
};
