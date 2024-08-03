<template>
  <div v-if="!isLoading && currentAnime">
    <h1 class="text-3xl font-bold mb-4">{{ currentAnime.title }}</h1>
    <div class="flex flex-col md:flex-row">
      <img
        :src="currentAnime.images.jpg.large_image_url"
        :alt="currentAnime.title"
        class="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
      />
      <div>
        <p class="mb-2"><strong>Score:</strong> {{ currentAnime.score }}</p>
        <p class="mb-2">
          <strong>Episodes:</strong> {{ currentAnime.episodes }}
        </p>
        <p class="mb-2"><strong>Status:</strong> {{ currentAnime.status }}</p>
        <p class="mb-4">
          <strong>Synopsis:</strong> {{ currentAnime.synopsis }}
        </p>
      </div>
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
