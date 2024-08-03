<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Top Anime</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="hasError" class="text-red-500">{{ errorMessage }}</div>
    <AnimeList v-else :animes="topAnimes" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AnimeList from "@/components/AnimeList.vue";

export default {
  name: "HomeView",
  components: {
    AnimeList,
  },
  computed: {
    ...mapState(["topAnimes"]),
    ...mapGetters(["isLoading", "hasError", "errorMessage"]),
  },
  methods: {
    ...mapActions(["fetchTopAnimes"]),
  },
  created() {
    this.fetchTopAnimes();
  },
};
</script>
