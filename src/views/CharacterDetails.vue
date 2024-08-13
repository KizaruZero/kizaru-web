<template>
  <div
    v-if="!isLoading && character"
    class="p-4 bg-black text-white min-h-screen"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Character Image and Details -->
      <div class="flex flex-col items-center md:items-start">
        <img
          :src="characterImage"
          :alt="character.name"
          class="w-full h-auto max-w-xs md:max-w-sm rounded-3xl shadow-lg mb-4"
        />
        <div class="text-center md:text-left">
          <h1 class="text-4xl font-bold mb-2">{{ character.name }}</h1>
          <p class="text-lg text-gray-400 mb-2">
            <strong>Nicknames:</strong>
            {{ character.nicknames?.join(", ") || "None" }}
          </p>
          <p class="text-lg text-gray-400 mb-2">
            <strong>Nicknames Kanji:</strong> {{ character.name_kanji }}
          </p>
          <p class="text-lg text-gray-400 mb-4">
            <strong>Favorites:</strong> {{ character.favorites }}
          </p>
          <p class="text-lg text-gray-300 mb-4">
            <strong>About:</strong> {{ character.about }}
          </p>
        </div>
      </div>

      <!-- Anime Roles, Manga Roles, and Voices -->
      <div class="flex flex-col gap-6">
        <div
          v-if="character.anime && character.anime.length > 0"
          class="bg-black p-4 rounded-lg shadow-lg"
        >
          <h2 class="text-2xl font-semibold mb-2">Anime Roles</h2>
          <ul>
            <li
              v-for="anime in character.anime"
              :key="anime.anime.mal_id"
              class="mb-1"
            >
              {{ anime.anime.title }} -
              <span class="text-gray-400">{{ anime.role }}</span>
            </li>
          </ul>
        </div>

        <div
          v-if="character.manga && character.manga.length > 0"
          class="bg-black p-4 rounded-lg shadow-lg"
        >
          <h2 class="text-2xl font-semibold mb-2">Manga Roles</h2>
          <ul>
            <li
              v-for="manga in character.manga"
              :key="manga.manga.mal_id"
              class="mb-1"
            >
              {{ manga.manga.title }} -
              <span class="text-gray-400">{{ manga.role }}</span>
            </li>
          </ul>
        </div>

        <div
          v-if="character.voices && character.voices.length > 0"
          class="bg-black p-4 rounded-lg shadow-lg"
        >
          <h2 class="text-2xl font-semibold mb-2">Voices</h2>
          <ul>
            <li
              v-for="voice in character.voices"
              :key="voice.person.mal_id"
              class="mb-1"
            >
              {{ voice.person.name }} ({{ voice.language }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="isLoading" class="p-4 text-center text-gray-400">
    Loading...
  </div>
  <div v-else-if="hasError" class="p-4 text-center text-red-500">
    {{ errorMessage }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "CharacterDetails",
  computed: {
    ...mapState({
      character: (state) => state.currentCharacter,
    }),
    ...mapGetters(["isLoading", "hasError", "errorMessage"]),
    id() {
      return this.$route.params.id;
    },
    characterImage() {
      return (
        this.character?.images?.jpg?.image_url ||
        this.character?.images?.webp?.image_url ||
        "https://via.placeholder.com/225x350?text=No+Image"
      );
    },
  },
  methods: {
    ...mapActions(["fetchCharacterDetails"]),
  },
  created() {
    this.fetchCharacterDetails(this.id);
    console.log("Fetched character details:", this.character);
  },
};
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
