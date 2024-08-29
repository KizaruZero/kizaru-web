<template>
  <section class="top-manga">
    <div class="top-manga">
      <!-- Top Anime Section -->
      <div class="">
        <h2 class="text-2xl font-bold my-4">TOP MANGA</h2>
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="hasError" class="text-red-500">
          {{ errorMessage }}
        </div>
        <!-- Penting disini , mangas ini untuk meneria data dari topaAnime dari vuex,dan diterskan ke AnimeList, jdi kalau merubah nama disiin. -->
        <MangaList v-else :mangas="topManga" />
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

import MangaList from "@/components/MangaList.vue";

const store = useStore();

// State
const topManga = computed(() => store.state.topManga);
// const seasonManga = computed(() => store.state.seasonManga);
const isLoading = computed(() => store.getters.isLoading);
const hasError = computed(() => store.getters.hasError);
const errorMessage = computed(() => store.getters.errorMessage);

const fetchTopManga = () => store.dispatch("fetchTopManga");
// const fetchTopMangaThisSeason = () => store.dispatch("fetchTopMangaThisSeason");

onMounted(() => {
  fetchTopManga();
});
</script>
