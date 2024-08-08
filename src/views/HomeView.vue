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

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Top Characters</h2>
      <div v-if="isLoadingCharacters">Loading...</div>
      <div v-else-if="hasErrorCharacters" class="text-red-500">
        {{ errorMessageCharacters }}
      </div>
      <CharacterList v-else :characters="topCharacters" />
    </section>

    <!-- <section>
      <h2 class="text-2xl font-bold mb-4">All Anime</h2>
      <div v-if="isLoadingAllAnime">Loading...</div>
      <div v-else-if="hasErrorAllAnime" class="text-red-500">
        {{ errorMessageAllAnime }}
      </div>
      <div v-else>
        <AnimeList :animes="allAnime" />
        <div class="mt-4 flex justify-center">
          <button
            @click="loadMoreAnime"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      </div>
    </section> -->
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
