<template>
  <div>
    <div class="nav flex justify-center gap-x-5">
      <router-link :to="{ name: 'animePopular' }" class=""
        ><h2
          class="text-md font-bold mb-4 flex bg-teal-500 px-3 py-1 rounded-full"
        >
          ANIME 2024
        </h2></router-link
      >
      <router-link :to="{ name: 'Anime2023' }" class=""
        ><h2
          class="text-md font-bold mb-4 flex bg-teal-500 px-3 py-1 rounded-full"
        >
          ANIME 2023
        </h2></router-link
      >
    </div>
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">TOP ANIME OF ALL TIME</h2>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="hasError" class="text-red-500">{{ errorMessage }}</div>
      <AnimeList v-else :animes="topAnimes" />
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">LATEST ANIME (SUMMER 2024)</h2>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="topAnimeThisSeason" />
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">TOP SPRING ANIME 2024</h2>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="springAnime" />
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">TOP WINTER ANIME 2024</h2>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="winterAnime" />
    </section>

    <section class="mb-8">
      <div class="nav flex justify-between">
        <h2 class="text-2xl font-bold mb-4">TOP ANIME 2023</h2>
        <router-link :to="{ name: 'Anime2023' }" class=""
          ><h2
            class="text-md font-bold mb-4 flex justify-self-end bg-teal-500 px-3 py-1 rounded-full"
          >
            VIEW ALL
          </h2></router-link
        >
      </div>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="fallAnime2023" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AnimeList from "@/components/AnimeList.vue";

export default {
  components: {
    AnimeList,
  },
  computed: {
    ...mapState([
      "topAnimes",
      "topAnimeThisSeason",
      "springAnime",
      "winterAnime",
      "fallAnime2023",
    ]),
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
    ...mapActions([
      "fetchTopAnimes",
      "fetchTopAnimeThisSeason",
      "fetchSpringAnime",
      "fetchWinterAnime",
      "fetchFallAnime2023",
    ]),
  },
  created() {
    this.fetchTopAnimes();
    this.fetchTopAnimeThisSeason();
    this.fetchSpringAnime();
    this.fetchWinterAnime();
    this.fetchFallAnime2023();
  },
};
</script>
