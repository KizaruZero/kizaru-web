<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Search Anime</h1>
    <SearchBar @search="searchAnimes" />
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="hasError" class="text-red-500">{{ errorMessage }}</div>
    <AnimeList v-else-if="searchResults.length" :animes="searchResults" />
    <p v-else>No results found.</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AnimeList from "@/components/AnimeList.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "SearchView",
  components: {
    AnimeList,
    SearchBar,
  },
  computed: {
    ...mapState(["searchResults"]),
    ...mapGetters(["isLoading", "hasError", "errorMessage"]),
  },
  methods: {
    ...mapActions(["searchAnimes"]),
  },
};
</script>
