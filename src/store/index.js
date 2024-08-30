import { createStore } from "vuex";
import api from "@/services/api";

export default createStore({
  state: {
    topAnimes: [],
    topManga: [],
    topAnimeThisSeason: [],
    topMangaThisSeason: [],
    topCharacters: [],
    animeRecommendations: [],
    allAnime: [],
    charDetails: {},
    charByAnime: [],
    searchResults: [],
    currentCharacter: [],
    animeStaff: [],
    currentPage: 1,
    loading: {
      topAnimes: false,
      topManga: false,
      seasonAnime: false,
      seasonManga: false,
      characters: false,
      animeRecommendations: false,
      allAnime: false,
      charDetails: false,
      charByAnime: false,
      animeStaff: false,
    },
    error: {
      topAnimes: null,
      topManga: null,
      seasonAnime: null,
      seasonManga: null,
      characters: null,
      animeRecommendations: null,
      allAnime: null,
      charDetails: null,
      charByAnime: null,
      animeStaff: null,
    },
  },
  mutations: {
    SET_TOP_ANIMES(state, animes) {
      state.topAnimes = animes;
    },
    SET_TOP_MANGA(state, manga) {
      state.topManga = manga;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results;
    },
    SET_CURRENT_ANIME(state, anime) {
      state.currentAnime = anime;
    },
    SET_CURRENT_MANGA(state, manga) {
      state.currentManga = manga;
    },
    SET_CURRENT_CHARACTER(state, character) {
      state.currentCharacter = character;
    },
    SET_TOP_ANIME_THIS_SEASON(state, animes) {
      state.topAnimeThisSeason = animes;
    },
    SET_TOP_MANGA_THIS_SEASON(state, manga) {
      state.topMangaThisSeason = manga;
    },
    SET_TOP_CHARACTERS(state, characters) {
      state.topCharacters = characters;
    },
    SET_ANIME_RECOMMENDATIONS(state, recommendations) {
      state.animeRecommendations = recommendations;
    },
    SET_ALL_ANIME(state, animes) {
      state.allAnime = [...state.allAnime, ...animes];
    },
    SET_CHAR_BY_ANIME(state, characters) {
      if (state.currentAnime) {
        state.currentAnime.characters = characters;
      }
    },

    SET_STAFF_BY_ANIME(state, staff) {
      state.animeStaff = staff;
    },

    INCREMENT_PAGE(state) {
      state.currentPage++;
    },
    SET_LOADING(state, { key, isLoading }) {
      state.loading[key] = isLoading;
    },
    SET_ERROR(state, { key, error }) {
      state.error[key] = error;
    },
  },
  actions: {
    async fetchTopAnimes({ commit }) {
      commit("SET_LOADING", { key: "topAnimes", isLoading: true });
      try {
        const response = await api.getTopAnimes();
        commit("SET_TOP_ANIMES", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "topAnimes",
          error: "Failed to fetch top animes",
        });
      } finally {
        commit("SET_LOADING", { key: "topAnimes", isLoading: false });
      }
    },
    async fetchTopManga({ commit }) {
      commit("SET_LOADING", { key: "topManga", isLoading: true });
      try {
        const response = await api.getTopManga();
        commit("SET_TOP_MANGA", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "topManga",
          error: "Failed to fetch top manga",
        });
      } finally {
        commit("SET_LOADING", { key: "topManga", isLoading: false });
      }
    },
    async fetchTopAnimeThisSeason({ commit }) {
      commit("SET_LOADING", { key: "seasonAnime", isLoading: true });
      try {
        const response = await api.getSeasonalAnimes();
        commit("SET_TOP_ANIME_THIS_SEASON", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "seasonAnime",
          error: "Failed to fetch seasonal animes",
        });
      } finally {
        commit("SET_LOADING", { key: "seasonAnime", isLoading: false });
      }
    },
    async fetchTopMangaThisSeason({ commit }) {
      commit("SET_LOADING", { key: "seasonManga", isLoading: true });
      try {
        const response = await api.getSeasonalManga();
        commit("SET_TOP_MANGA_THIS_SEASON", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "seasonManga",
          error: "Failed to fetch seasonal manga",
        });
      } finally {
        commit("SET_LOADING", { key: "seasonManga", isLoading: false });
      }
    },
    async fetchTopCharacters({ commit }) {
      commit("SET_LOADING", { key: "characters", isLoading: true });
      try {
        const response = await api.getTopCharacters();
        commit("SET_TOP_CHARACTERS", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "characters",
          error: "Failed to fetch top characters",
        });
      } finally {
        commit("SET_LOADING", { key: "characters", isLoading: false });
      }
    },
    async searchAnimes({ commit }, query) {
      if (query.length < 3) return;
      commit("SET_LOADING", true);
      try {
        const response = await api.searchAnimes(query);
        commit("SET_SEARCH_RESULTS", response.data.data);
      } catch (error) {
        commit("SET_ERROR", "Failed to search animes");
        console.error("Error searching animes:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchAnimeDetails({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        const response = await api.getAnimeDetails(id);
        commit("SET_CURRENT_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", "Failed to fetch anime details");
        console.error("Error fetching anime details:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async fetchMangaDetails({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        const response = await api.getMangaDetails(id);
        commit("SET_CURRENT_MANGA", response.data.data);
      } catch (error) {
        commit("SET_ERROR", "Failed to fetch anime details");
        console.error("Error fetching manga details:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async fetchCharacterDetails({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        const response = await api.getCharacterDetails(id);
        commit("SET_CURRENT_CHARACTER", response.data.data);
      } catch (error) {
        commit("SET_ERROR", "Failed to fetch anime details");
        console.error("Error fetching anime details:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async fetchAllAnime({ commit, state }) {
      commit("SET_LOADING", { key: "allAnime", isLoading: true });
      try {
        const response = await api.getAllAnime(state.currentPage);
        commit("SET_ALL_ANIME", response.data.data);
        commit("INCREMENT_PAGE");
      } catch (error) {
        commit("SET_ERROR", {
          key: "allAnime",
          error: "Failed to fetch all anime",
        });
      } finally {
        commit("SET_LOADING", { key: "allAnime", isLoading: false });
      }
    },
    async fetchAnimeRecommendations({ commit }) {
      commit("SET_LOADING", { key: "animeRecommendations", isLoading: true });
      try {
        const response = await api.getRecentAnimeRecommendations();
        commit("SET_ANIME_RECOMMENDATIONS", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "animeRecommendations",
          error: "Failed to fetch anime recommendations",
        });
      } finally {
        commit("SET_LOADING", {
          key: "animeRecommendations",
          isLoading: false,
        });
      }
    },
    async fetchCharByAnime({ commit }, id) {
      commit("SET_LOADING", { key: "charByAnime", isLoading: true });
      try {
        const response = await api.getCharacterByAnime(id);
        commit("SET_CHAR_BY_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "charByAnime",
          error: "Failed to fetch characters by anime",
        });
      } finally {
        commit("SET_LOADING", { key: "charByAnime", isLoading: false });
      }
    },

    async fetchAnimeStaff({ commit }, id) {
      commit("SET_LOADING", { key: "staffAnime", isLoading: true });
      try {
        const response = await api.getAnimeStaff(id);
        commit("SET_STAFF_BY_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "staffAnime",
          error: "Failed to fetch staff by anime",
        });
      } finally {
        commit("SET_LOADING", { key: "staffAnime", isLoading: false });
      }
    },
  },
  getters: {
    isLoading: (state) => state.loading.topAnimes,
    hasError: (state) => state.error.topAnimes !== null,
    errorMessage: (state) => state.error.topAnimes,
    isLoadingSeasonAnime: (state) => state.loading.seasonAnime,
    hasErrorSeasonAnime: (state) => state.error.seasonAnime !== null,
    errorMessageSeasonAnime: (state) => state.error.seasonAnime,
    isLoadingCharacters: (state) => state.loading.characters,
    hasErrorCharacters: (state) => state.error.characters !== null,
    errorMessageCharacters: (state) => state.error.characters,
    isLoadingAllAnime: (state) => state.loading.allAnime,
    hasErrorAllAnime: (state) => state.error.allAnime !== null,
    errorMessageAllAnime: (state) => state.error.allAnime,
    isLoadingSearch: (state) => state.loading.search,
    hasErrorSearch: (state) => state.error.search !== null,
    errorMessageSearch: (state) => state.error.search,
    isLoadingManga: (state) => state.loading.topManga,
    hasErrorManga: (state) => state.error.topManga !== null,
    errorMessageManga: (state) => state.error.topManga,
    isLoadingRecommendations: (state) => state.loading.animeRecommendations,
    hasErrorRecommendations: (state) =>
      state.error.animeRecommendations !== null,
    errorMessageRecommendations: (state) => state.error.animeRecommendations,
    isLoadingCharDetails: (state) => state.loading.charDetails,
    hasErrorCharDetails: (state) => state.error.charDetails !== null,
    errorMessageCharDetails: (state) => state.error.char,
    isLoadingCharByAnime: (state) => state.loading.charByAnime,
    hasErrorCharByAnime: (state) => state.error.charByAnime !== null,
    errorMessageCharByAnime: (state) => state.error.charByAnime,
    isLoadingTopMangaThisSeason: (state) => state.loading.seasonManga,
    hasErrorTopMangaThisSeason: (state) => state.error.seasonManga !== null,
    errorMessageTopMangaThisSeason: (state) => state.error.seasonManga,
    isLoadingAnimeStaff: (state) => state.loading.staffAnime,
    hasErrorAnimeStaff: (state) => state.error.staffAnime !== null,
    errorMessageAnimeStaff: (state) => state.error.staffAnime,
  },
});
