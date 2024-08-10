<template>
  <div class="flex">
    <!-- Top Anime Section -->
    <div class="flex-1 mr-8">
      <section class="">
        <h2 class="text-2xl font-bold mb-4">Top Anime of All Time</h2>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError" class="text-red-500">
          {{ errorMessage }}
        </div>
        <AnimeList v-else :animes="topAnimes" />
      </section>
    </div>

    <!-- Top Characters Section -->

    <div class="w-1/5 flex mx-auto justify-center">
      <section>
        <h2 class="text-2xl font-bold mb-4">Top Characters</h2>
        <div v-if="isLoadingCharacters">Loading...</div>
        <div v-else-if="hasErrorCharacters" class="text-red-500">
          {{ errorMessageCharacters }}
        </div>
        <CharacterList v-else :characters="topCharacters" />
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AnimeList from "@/components/AnimeList.vue";
import CharacterList from "@/components/CharacterList.vue";

export default {
  name: "HomeView",
  components: {
    AnimeList,
    CharacterList,
  },
  computed: {
    ...mapState([
      "topAnimes",
      "topAnimeThisSeason",
      "topCharacters",
      "allAnime",
    ]),
    ...mapGetters([
      "isLoading",
      "hasError",
      "errorMessage",
      "isLoadingSeasonAnime",
      "hasErrorSeasonAnime",
      "errorMessageSeasonAnime",
      "isLoadingCharacters",
      "hasErrorCharacters",
      "errorMessageCharacters",
      "isLoadingAllAnime",
      "hasErrorAllAnime",
      "errorMessageAllAnime",
    ]),
  },
  methods: {
    ...mapActions([
      "fetchTopAnimes",
      "fetchTopAnimeThisSeason",
      "fetchTopCharacters",
      "fetchAllAnime",
    ]),
    loadMoreAnime() {
      this.fetchAllAnime();
    },
  },
  created() {
    this.fetchTopAnimes();
    this.fetchTopAnimeThisSeason();
    this.fetchTopCharacters();
    this.fetchAllAnime();
  },
};
</script>
