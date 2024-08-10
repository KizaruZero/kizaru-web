<template>
  <div v-if="!isLoading && currentAnime">
    <h1 class="text-3xl font-bold mb-4">{{ currentAnime.title }}</h1>
    <div class="flex flex-col md:flex-row">
      <img
        :src="currentAnime.images.jpg.large_image_url"
        :alt="currentAnime.title"
        class="w-full h-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
      />
      <div class="flex-1">
        <p class="mb-2"><strong>Score:</strong> {{ currentAnime.score }}</p>
        <p class="mb-2">
          <strong>Episodes:</strong> {{ currentAnime.episodes }}
        </p>
        <p class="mb-2"><strong>Status:</strong> {{ currentAnime.status }}</p>
        <p class="mb-2"><strong>Type:</strong> {{ currentAnime.type }}</p>
        <p class="mb-2"><strong>Rating:</strong> {{ currentAnime.rating }}</p>
        <p class="mb-2"><strong>Season:</strong> {{ currentAnime.season }}</p>
        <p class="mb-2"><strong>Year:</strong> {{ currentAnime.year }}</p>
        <p class="mb-4">
          <strong>Synopsis:</strong> {{ currentAnime.synopsis }}
        </p>
        <div class="mb-4">
          <strong>Genres:</strong>
          <ul>
            <li v-for="genre in currentAnime.genres" :key="genre.mal_id">
              {{ genre.name }}
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <strong>Producers:</strong>
          <ul>
            <li
              v-for="producer in currentAnime.producers"
              :key="producer.mal_id"
            >
              {{ producer.name }}
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <strong>Studios:</strong>
          <ul>
            <li v-for="studio in currentAnime.studios" :key="studio.mal_id">
              {{ studio.name }}
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <strong>Licensors:</strong>
          <ul>
            <li
              v-for="licensor in currentAnime.licensors"
              :key="licensor.mal_id"
            >
              {{ licensor.name }}
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <strong>Themes:</strong>
          <ul>
            <li v-for="theme in currentAnime.themes" :key="theme.mal_id">
              {{ theme.name }}
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <strong>Demographics:</strong>
          <ul>
            <li
              v-for="demographic in currentAnime.demographics"
              :key="demographic.mal_id"
            >
              {{ demographic.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="currentAnime.trailer">
      <h2 class="text-2xl font-semibold mt-6 mb-2">Trailer</h2>
      <iframe
        :src="`https://www.youtube.com/embed/${currentAnime.trailer.youtube_id}`"
        class="w-full h-64"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <div v-else-if="isLoading">Loading...</div>
  <div v-else-if="hasError" class="text-red-500">{{ errorMessage }}</div>
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
    ...mapActions(["fetchAnimeDetails"]),
  },
  created() {
    this.fetchAnimeDetails(this.$route.params.id);
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
