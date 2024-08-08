<template>
  <div>
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Top Anime of All Time</h2>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="hasError" class="text-red-500">{{ errorMessage }}</div>
      <AnimeList v-else :animes="topAnimes" />
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Top Anime This Season</h2>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="topAnimeThisSeason" />
    </section>
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
    ...mapState(["topAnimes", "topAnimeThisSeason"]),
    ...mapGetters([
      "isLoading",
      "hasError",
      "errorMessage",
      "isLoadingSeasonAnime",
      "hasErrorSeasonAnime",
      "errorMessageSeasonAnime",
    ]),
  },
  methods: {
    ...mapActions(["fetchTopAnimes", "fetchTopAnimeThisSeason"]),
  },
  created() {
    this.fetchTopAnimes();
    this.fetchTopAnimeThisSeason();
  },
};
</script>
