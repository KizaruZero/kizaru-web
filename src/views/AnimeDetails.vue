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

      <!-- Character Section -->
      <div v-if="currentAnime?.characters?.length" class="mt-8">
        <h2 class="text-2xl font-semibold mb-2">Characters</h2>
        <CharacterList :characters="animeChar" />
      </div>
      <div v-else><h2>No characters available</h2></div>

      <!-- Character Section -->
      <div v-if="currentAnime.characters" class="mt-8">
        <h2 class="text-2xl font-semibold mb-2">Characters</h2>
        <div
          class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="character in currentAnime.characters"
            :key="character.character.mal_id"
            class="bg-gray-800 p-4 rounded-lg"
          >
            <img
              :src="
                character.character.images?.jpg?.image_url ||
                character.character.images?.webp?.image_url ||
                'https://via.placeholder.com/225x350?text=No+Image'
              "
              :alt="character.character.name"
              class="w-full h-auto max-w-xs md:max-w-sm rounded-3xl shadow-lg mb-4"
            />
            <h3 class="text-xl font-semibold mt-2">
              {{ character.character.name }}
            </h3>
            <p class="text-gray-400">{{ character.role }}</p>
          </div>
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

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import CharacterList from "@/components/CharacterList.vue";

const store = useStore();
const route = useRoute();

const currentAnime = computed(() => store.state.currentAnime);
const isLoading = computed(() => store.getters.isLoading);
const hasError = computed(() => store.getters.hasError);
const errorMessage = computed(() => store.getters.errorMessage);
const animeChar = computed(() => store.state.currentAnime.characters);
// current animem character

const fetchAnimeDetails = (id) => store.dispatch("fetchAnimeDetails", id);
const fetchCharByAnime = (id) => store.dispatch("fetchCharByAnime", id);

const loadAnimeCharacters = () => {
  const animeId = route.params.id;
  fetchCharByAnime(animeId);
};

onMounted(() => {
  fetchAnimeDetails(route.params.id);
  loadAnimeCharacters();

  // Pastikan untuk mengakses characters setelah data di-load sepenuhnya
  setTimeout(() => {
    if (currentAnime.value && currentAnime.value.characters) {
      console.log("Current Anime Characters:", currentAnime.value.characters);
    } else {
      console.log("Characters data is not yet available.");
    }
  }, 1000);
});
</script>

<style scoped>
/* Add any custom styling or overrides here if needed */
</style>
