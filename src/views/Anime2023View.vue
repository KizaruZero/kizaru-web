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
      <h2 class="text-2xl font-bold mb-4">TOP SUMMER ANIME 2023</h2>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="summerAnime2023" />
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">TOP SPRING ANIME 2023</h2>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="springAnime2023" />
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">TOP WINTER ANIME 2023</h2>
      <div v-if="isLoadingSeasonAnime">Loading...</div>
      <div v-else-if="hasErrorSeasonAnime" class="text-red-500">
        {{ errorMessageSeasonAnime }}
      </div>
      <AnimeList v-else :animes="winterAnime2023" />
    </section>

    <section class="mb-8">
      <div class="nav flex">
        <h2 class="text-2xl font-bold mb-4">TOP FALL ANIME 2023</h2>
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
      "summerAnime2023",
      "springAnime2023",
      "winterAnime2023",
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
      "fetchSummerAnime2023",
      "fetchTopAnimeThisSeason",
      "fetchSpringAnime2023",
      "fetchWinterAnime2023",
      "fetchFallAnime2023",
    ]),
  },
  created() {
    this.fetchSummerAnime2023();
    this.fetchTopAnimeThisSeason();
    this.fetchSpringAnime2023();
    this.fetchWinterAnime2023();
    this.fetchFallAnime2023();
  },
};
</script>
