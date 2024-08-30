<template>
  <!-- <section class="bg-gradient-to-r from-black to-gray-800 text-white py-16">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl font-bold mb-4">Welcome to Anime Universe</h1>
      <p class="text-lg mb-6">
        Explore your favorite anime and join the community!
      </p>
      <a
        href="#explore"
        class="bg-teal-500 text-black px-6 py-3 rounded-lg hover:bg-teal-400 transition"
        >Start Exploring</a
      >
    </div>
  </section> -->

  <section class="top-anime">
    <div class="top">
      <!-- Top Anime Section -->
      <div class="">
        <h2 class="text-2xl font-bold my-4">TOP ANIME</h2>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError" class="text-red-500">
          {{ errorMessage }}
        </div>
        <!-- Penting disini , animes ini untuk meneria data dari topaAnime dari vuex,dan diterskan ke AnimeList, jdi kalau merubah nama disiin. -->
        <AnimeList v-else :animes="topAnimes" />
      </div>
    </div>
    <div class="summer">
      <!-- Top Anime Section -->
      <div class="">
        <h2 class="text-2xl font-bold my-4">ANIME THIS SEASON</h2>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError" class="text-red-500">
          {{ errorMessage }}
        </div>
        <!-- Penting disini , animes ini untuk meneria data dari topaAnime dari vuex,dan diterskan ke AnimeList, jdi kalau merubah nama disiin. -->
        <AnimeList v-else :animes="topAnimeThisSeason" />
      </div>
    </div>
    <div class="top-manga">
      <!-- Top Anime Section -->
      <div class="">
        <h2 class="text-2xl font-bold my-4">TOP MANGA</h2>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError" class="text-red-500">
          {{ errorMessage }}
        </div>
        <!-- Penting disini , animes ini untuk meneria data dari topaAnime dari vuex,dan diterskan ke AnimeList, jdi kalau merubah nama disiin. -->
        <MangaList v-else :mangas="topManga" />
      </div>
    </div>

    <div class="top-char">
      <!-- Top Anime Section -->
      <div class="">
        <h2 class="text-2xl font-bold my-4">TOP CHARACTERS</h2>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError" class="text-red-500">
          {{ errorMessage }}
        </div>
        <!-- Penting disini , animes ini untuk meneria data dari topaAnime dari vuex,dan diterskan ke AnimeList, jdi kalau merubah nama disiin. -->
        <CharacterList v-else :characters="topCharacters" />
      </div>
    </div>
  </section>
  <!-- <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
  >
    <div
      class="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
    >
      <img
        src="anime-image.jpg"
        alt="Anime Title"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h3 class="text-2xl font-semibold text-teal-400 mb-2">Anime Title</h3>
        <p class="text-gray-400 mb-4">A brief description about the anime.</p>
        <span class="bg-teal-500 text-white px-2 py-1 rounded-full"
          >Rating: 9.0</span
        >
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import AnimeList from "@/components/AnimeList.vue";
import MangaList from "@/components/MangaList.vue";
import CharacterList from "@/components/CharacterList.vue";

const store = useStore();

// State
const topAnimes = computed(() => store.state.topAnimes);
const topManga = computed(() => store.state.topManga);
const topAnimeThisSeason = computed(() => store.state.topAnimeThisSeason);
const topCharacters = computed(() => store.state.topCharacters);
const isLoading = computed(() => store.getters.isLoading);
const hasError = computed(() => store.getters.hasError);
const errorMessage = computed(() => store.getters.errorMessage);

const fetchTopAnimes = () => store.dispatch("fetchTopAnimes");
const fetchTopAnimeThisSeason = () => store.dispatch("fetchTopAnimeThisSeason");
const fetchAllAnime = () => store.dispatch("fetchAllAnime");
const fetchTopManga = () => store.dispatch("fetchTopManga");
const fetchTopCharacters = () => store.dispatch("fetchTopCharacters");

onMounted(() => {
  fetchTopAnimes();
  fetchTopAnimeThisSeason();
  fetchAllAnime();
  fetchTopManga();
  fetchTopCharacters();
});
</script>
