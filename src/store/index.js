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
    springAnime: [],
    winterAnime: [],
    summerAnime2023: [],
    springAnime2023: [],
    winterAnime2023: [],
    fallAnime2023: [],
    allAnime: [],
    charDetails: {},
    charByAnime: [],
    searchResults: [],
    currentCharacter: [],
    animeStaff: [],
    jadwalAnime: [],
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
      springAnime: false,
      winterAnime: false,
      summerAnime2023: false,
      springAnime2023: false,
      winterAnime2023: false,
      fallAnime2023: false,
      jadwalAnime: false,
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
      springAnime: null,
      animeStaff: null,
      winterAnime: null,
      summerAnime2023: null,
      springAnime2023: null,
      winterAnime2023: null,
      fallAnime2023: null,
      jadwalAnime: null,
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

    SET_SPRING_ANIME(state, animes) {
      state.springAnime = animes;
    },
    SET_WINTER_ANIME(state, animes) {
      state.winterAnime = animes;
    },

    SET_SUMMER_ANIME_2023(state, animes) {
      state.summerAnime2023 = animes;
    },
    SET_SPRING_ANIME_2023(state, animes) {
      state.springAnime2023 = animes;
    },
    SET_WINTER_ANIME_2023(state, animes) {
      state.winterAnime2023 = animes;
    },
    SET_FALL_ANIME_2023(state, animes) {
      state.fallAnime2023 = animes;
    },

    SET_JADWALL_ANIME(state, animes) {
      state.jadwalAnime = animes;
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
    async fetchTopAnimes({ commit, state }) {
      if (state.topAnimes.length > 0) {
        return;
      }
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
    async fetchTopManga({ commit, state }) {
      if (state.topManga.length > 0) {
        return;
      }
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
    async fetchTopAnimeThisSeason({ commit, state }) {
      if (state.topAnimeThisSeason.length > 0) {
        return;
      }
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

    async fetchSpringAnime({ commit, state }) {
      if (state.springAnime.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "springAnime", isLoading: true });
      try {
        const response = await api.getSpringAnime();
        commit("SET_SPRING_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "springAnime",
          error: "Failed to fetch spring anime",
        });
      } finally {
        commit("SET_LOADING", { key: "springAnime", isLoading: false });
      }
    },
    async fetchWinterAnime({ commit, state }) {
      if (state.winterAnime.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "winterAnime", isLoading: true });
      try {
        const response = await api.getWinterAnime();
        commit("SET_WINTER_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "winterAnime",
          error: "Failed to fetch winter anime",
        });
      } finally {
        commit("SET_LOADING", { key: "winterAnime", isLoading: false });
      }
    },

    async fetchSummerAnime2023({ commit, state }) {
      if (state.summerAnime2023.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "summerAnime2023", isLoading: true });
      try {
        const response = await api.getSummerAnime2023();
        commit("SET_SUMMER_ANIME_2023", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "summerAnime2023",
          error: "Failed to fetch summer anime 2023",
        });
      } finally {
        commit("SET_LOADING", { key: "summerAnime2023", isLoading: false });
      }
    },
    async fetchSpringAnime2023({ commit, state }) {
      if (state.springAnime2023.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "springAnime2023", isLoading: true });
      try {
        const response = await api.getSpringAnime2023();
        commit("SET_SPRING_ANIME_2023", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "springAnime2023",
          error: "Failed to fetch spring anime 2023",
        });
      } finally {
        commit("SET_LOADING", { key: "springAnime2023", isLoading: false });
      }
    },
    async fetchWinterAnime2023({ commit, state }) {
      if (state.winterAnime2023.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "winterAnime2023", isLoading: true });
      try {
        const response = await api.getWinterAnime2023();
        commit("SET_WINTER_ANIME_2023", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "winterAnime2023",
          error: "Failed to fetch winter anime 2023",
        });
      } finally {
        commit("SET_LOADING", { key: "winterAnime2023", isLoading: false });
      }
    },
    async fetchFallAnime2023({ commit, state }) {
      if (state.fallAnime2023.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "fallAnime2023", isLoading: true });
      try {
        const response = await api.getFallAnime2023();
        commit("SET_FALL_ANIME_2023", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "fallAnime2023",
          error: "Failed to fetch fall anime 2023",
        });
      } finally {
        commit("SET_LOADING", { key: "fallAnime2023", isLoading: false });
      }
    },
    async fetchTopMangaThisSeason({ commit, state }) {
      if (state.topMangaThisSeason.length > 0) {
        return;
      }
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
    async fetchTopCharacters({ commit, state }) {
      if (state.topCharacters.length > 0) {
        return;
      }
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
      commit("SET_LOADING", { key: "search", isLoading: true });
      try {
        const response = await api.searchAnimes(query);
        commit("SET_SEARCH_RESULTS", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "search",
          error: "Failed to search animes",
        });
        console.error("Error searching animes:", error);
      } finally {
        commit("SET_LOADING", { key: "search", isLoading: false });
      }
    },
    async fetchAnimeDetails({ commit, state }, id) {
      if (state.currentAnime && state.currentAnime.id === id) {
        return;
      }
      commit("SET_LOADING", { key: "charDetails", isLoading: true });
      try {
        const response = await api.getAnimeDetails(id);
        commit("SET_CURRENT_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "charDetails",
          error: "Failed to fetch anime details",
        });
        console.error("Error fetching anime details:", error);
      } finally {
        commit("SET_LOADING", { key: "charDetails", isLoading: false });
      }
    },
    async fetchMangaDetails({ commit, state }, id) {
      if (state.currentManga && state.currentManga.id === id) {
        return;
      }
      commit("SET_LOADING", { key: "charDetails", isLoading: true });
      try {
        const response = await api.getMangaDetails(id);
        commit("SET_CURRENT_MANGA", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "charDetails",
          error: "Failed to fetch manga details",
        });
        console.error("Error fetching manga details:", error);
      } finally {
        commit("SET_LOADING", { key: "charDetails", isLoading: false });
      }
    },
    async fetchCharacterDetails({ commit, state }, id) {
      if (state.currentCharacter && state.currentCharacter.id === id) {
        return;
      }
      commit("SET_LOADING", { key: "charDetails", isLoading: true });
      try {
        const response = await api.getCharacterDetails(id);
        commit("SET_CURRENT_CHARACTER", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "charDetails",
          error: "Failed to fetch character details",
        });
        console.error("Error fetching character details:", error);
      } finally {
        commit("SET_LOADING", { key: "charDetails", isLoading: false });
      }
    },
    async fetchAnimeRecommendations({ commit, state }, id) {
      if (state.animeRecommendations.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "animeRecommendations", isLoading: true });
      try {
        const response = await api.getAnimeRecommendations(id);
        commit("SET_ANIME_RECOMMENDATIONS", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "animeRecommendations",
          error: "Failed to fetch anime recommendations",
        });
        console.error("Error fetching anime recommendations:", error);
      } finally {
        commit("SET_LOADING", {
          key: "animeRecommendations",
          isLoading: false,
        });
      }
    },
    async fetchAllAnime({ commit, state }) {
      if (state.allAnime.length > 0 && state.loading.allAnime) {
        return;
      }
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
        console.error("Error fetching all anime:", error);
      } finally {
        commit("SET_LOADING", { key: "allAnime", isLoading: false });
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
    async fetchStaffByAnime({ commit, state }, id) {
      if (state.animeStaff.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "animeStaff", isLoading: true });
      try {
        const response = await api.getStaffByAnime(id);
        commit("SET_STAFF_BY_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "animeStaff",
          error: "Failed to fetch staff by anime",
        });
        console.error("Error fetching staff by anime:", error);
      } finally {
        commit("SET_LOADING", { key: "animeStaff", isLoading: false });
      }
    },
    async fetchJadwalAnime({ commit, state }) {
      if (state.jadwalAnime.length > 0) {
        return;
      }
      commit("SET_LOADING", { key: "jadwalAnime", isLoading: true });
      try {
        const response = await api.getJadwal();
        commit("SET_JADWALL_ANIME", response.data.data);
      } catch (error) {
        commit("SET_ERROR", {
          key: "jadwalAnime",
          error: "Failed to fetch jadwal anime",
        });
        console.error("Error fetching jadwal anime:", error);
      } finally {
        commit("SET_LOADING", { key: "jadwalAnime", isLoading: false });
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
