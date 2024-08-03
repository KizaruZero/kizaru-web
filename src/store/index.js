import { createStore } from "vuex";
import api from "@/services/api";

export default createStore({
  state: {
    allAnimes: [],
    topAnimes: [],
    searchResults: [],
    currentAnime: null,
    loading: false,
    error: null,
  },
  mutations: {
    SET_ALL_ANIMES(state, animes) {
      state.allAnimes = animes;
    },
    SET_TOP_ANIMES(state, animes) {
      state.topAnimes = animes;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results;
    },
    SET_CURRENT_ANIME(state, anime) {
      state.currentAnime = anime;
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchAllAnimes({ commit }) {
      commit("SET_LOADING", true);
      try {
        const response = await api.getAnimeFullById();
        commit("SET_ALL_ANIMES", response.data.data);
      } catch (error) {
        commit("SET_ERROR", "Failed to fetch all animes");
        console.error("Error fetching all animes:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchTopAnimes({ commit }) {
      commit("SET_LOADING", true);
      try {
        const response = await api.getTopAnimes();
        commit("SET_TOP_ANIMES", response.data.data);
      } catch (error) {
        commit("SET_ERROR", "Failed to fetch top animes");
        console.error("Error fetching top animes:", error);
      } finally {
        commit("SET_LOADING", false);
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
  },
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
    errorMessage: (state) => state.error,
  },
});
