<template>
  <div
    v-if="!isLoading && currentManga"
    class="bg-black text-white min-h-screen py-8"
  >
    <div class="container mx-auto px-4">
      <!-- Header with Manga Image and Title -->
      <div class="flex flex-col md:flex-row items-center mb-8">
        <img
          :src="
            currentManga.images?.jpg?.large_image_url ||
            'https://via.placeholder.com/300x450?text=No+Image'
          "
          :alt="currentManga.title"
          class="w-full md:w-1/3 h-80 object-cover rounded-lg shadow-lg"
        />
        <div class="md:ml-8 flex flex-col mt-4 md:mt-0">
          <h1 class="text-4xl font-bold mb-2">{{ currentManga.title }}</h1>
          <h2 class="text-xl text-gray-400 mb-4">
            {{ currentManga.title_english || currentManga.title_japanese }}
          </h2>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="bg-teal-500 text-gray-900 px-3 py-1 rounded-full text-sm"
              >{{ currentManga.type }}</span
            >
            <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">{{
              currentManga.volumes
            }}</span>
            <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">{{
              currentManga.chapters
            }}</span>
            <span
              class="bg-teal-500 text-gray-900 px-3 py-1 rounded-full text-sm"
              >{{ currentManga.status }}</span
            >
          </div>
          <p class="text-gray-400 mb-4">
            {{ currentManga.synopsis.substring(0, 150) }}...
          </p>
          <a
            :href="currentManga.trailer?.url || '#'"
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
            <li v-for="(genre, index) in currentManga.genres" :key="index">
              {{ genre.name }}
            </li>
          </ul>
        </div>

        <!-- Studios -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Published By</h3>
          <ul class="list-disc pl-5">
            <!-- From Date -->
            <li>
              Published From:
              {{ currentManga.published?.prop?.from?.day }}/
              {{ currentManga.published?.prop?.from?.month }}/
              {{ currentManga.published?.prop?.from?.year }}
            </li>

            <!-- To Date -->
            <li>
              Published To:
              {{ currentManga.published?.prop?.to?.day }}/
              {{ currentManga.published?.prop?.to?.month }}/
              {{ currentManga.published?.prop?.to?.year }}
            </li>

            <!-- Published Date as String -->
          </ul>
        </div>

        <!-- Producers -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Author</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li v-for="authors in currentManga.authors" :key="authors.mal_id">
              <a
                :href="authors.url"
                target="_blank"
                class="hover:text-teal-400"
                >{{ authors.name }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Licensors -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Licensors</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li
              v-for="licensor in currentManga.licensors"
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
            <li v-for="theme in currentManga.themes" :key="theme.mal_id">
              {{ theme.name }}
            </li>
          </ul>
        </div>

        <!-- Demographics -->
        <div>
          <h3 class="text-2xl font-semibold mb-2">Demographics</h3>
          <ul class="list-disc pl-5 text-gray-400">
            <li
              v-for="demographic in currentManga.demographics"
              :key="demographic.mal_id"
            >
              {{ demographic.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Trailer Section -->
      <div v-if="currentManga.trailer" class="mt-8">
        <h2 class="text-2xl font-semibold mb-2">Trailer</h2>
        <iframe
          :src="`https://www.youtube.com/embed/${currentManga.trailer.youtube_id}`"
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
// import CharacterList from "@/components/CharacterList.vue";

const store = useStore();
const route = useRoute();

const currentManga = computed(() => store.state.currentManga);
const isLoading = computed(() => store.getters.isLoading);
const hasError = computed(() => store.getters.hasError);
const errorMessage = computed(() => store.getters.errorMessage);
// current Mangam character

const fetchMangaDetails = (id) => store.dispatch("fetchMangaDetails", id);

onMounted(() => {
  fetchMangaDetails(route.params.id);

  // Pastikan untuk mengakses characters setelah data di-load sepenuhnya
});
</script>
