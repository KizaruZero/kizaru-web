<template>
  <div
    v-if="!isLoading && currentAnime"
    class="bg-black text-white min-h-screen py-8"
  >
    <div class="container mx-auto px-4">
      <!-- Header with Anime Image and Title -->
      <div class="flex flex-col md:flex-row items-center mb-8">
        <img
          :src="
            currentAnime.images?.jpg?.large_image_url ||
            'https://via.placeholder.com/300x450?text=No+Image'
          "
          :alt="currentAnime.title"
          class="w-full md:w-1/3 h-80 object-cover rounded-lg shadow-lg"
        />
        <div class="md:ml-8 flex flex-col mt-4 md:mt-0">
          <h1 class="text-4xl font-bold mb-2">{{ currentAnime.title }}</h1>
          <h2 class="text-xl text-gray-400 mb-4">
            {{ currentAnime.title_english || currentAnime.title_japanese }}
          </h2>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="bg-teal-500 text-gray-900 px-3 py-1 rounded-full text-sm"
              >{{ currentAnime.type }}</span
            >
            <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">{{
              currentAnime.rating
            }}</span>
            <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">{{
              currentAnime.duration
            }}</span>
          </div>
          <p class="text-gray-400 mb-4">
            {{ currentAnime.synopsis.substring(0, 150) }}...
          </p>
          <a
            :href="currentAnime.trailer?.url || '#'"
            target="_blank"
            class="bg-teal-500 text-gray-900 px-4 py-2 rounded-xl text-center hover:bg-teal-400 transition w-1/4"
          >
            Watch Trailer
          </a>
        </div>
      </div>

      <!-- Additional Details Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Genres -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Genres</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li v-for="(genre, index) in currentAnime.genres" :key="index">
              {{ genre.name }}
            </li>
          </ul>
        </div>

        <!-- Studios -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Studios</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li v-for="studio in currentAnime.studios" :key="studio.mal_id">
              <a
                :href="studio.url"
                target="_blank"
                class="hover:text-teal-400"
                >{{ studio.name }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Producers -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Producers</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li
              v-for="producer in currentAnime.producers"
              :key="producer.mal_id"
            >
              <a
                :href="producer.url"
                target="_blank"
                class="hover:text-teal-400"
                >{{ producer.name }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Licensors -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Licensors</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li
              v-for="licensor in currentAnime.licensors"
              :key="licensor.mal_id"
            >
              <a
                :href="licensor.url"
                target="_blank"
                class="hover:text-teal-400"
                >{{ licensor.name }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Themes -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Themes</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li v-for="theme in currentAnime.themes" :key="theme.mal_id">
              {{ theme.name }}
            </li>
          </ul>
        </div>

        <!-- Demographics -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Demographics</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li
              v-for="demographic in currentAnime.demographics"
              :key="demographic.mal_id"
            >
              {{ demographic.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Trailer Section -->
      <div v-if="currentAnime.trailer" class="mt-8">
        <h2 class="text-2xl font-semibold mb-2">Trailer</h2>
        <iframe
          :src="`https://www.youtube.com/embed/${currentAnime.trailer.youtube_id}`"
          class="w-3/4 h-96 mx-auto rounded-xl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
  <div v-else-if="isLoading" class="text-center text-gray-400">Loading...</div>
  <div v-else-if="hasError" class="text-red-500 text-center">
    {{ errorMessage }}
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "AnimeDetails",
  computed: {
    ...mapState(["currentAnime"]),
    ...mapGetters(["isLoading", "hasError", "errorMessage"]),
  },
  methods: {
    ...mapActions(["fetchAnimeDetails", "fetchCharByAnime"]),
    loadAnimeCharacters() {
      const animeId = this.$route.params.id;
      this.fetchCharByAnime(animeId);
    },
  },
  created() {
    this.fetchAnimeDetails(this.$route.params.id);
    this.loadAnimeCharacters();
  },
};
</script>

<style scoped>
/* Add any custom styling or overrides here if needed */
</style>
