<template>
  <div v-if="!isLoading && character">
    <h1 class="text-3xl font-bold mb-4">{{ character.name }}</h1>
    <div class="flex flex-col md:flex-row">
      <img
        :src="characterImage"
        :alt="character.name"
        class="w-full h-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
      />
      <div class="flex-1">
        <p class="mb-2">
          <strong>Nicknames:</strong>
          {{ character.nicknames?.join(", ") || "None" }}
        </p>
        <p class="mb-2">
          <strong>Nicknames Kanji:</strong>
          {{ character.name_kanji }}
        </p>
        <p class="mb-2">
          <strong>Favorites:</strong> {{ character.favorites }}
        </p>
        <p class="mb-4"><strong>About:</strong> {{ character.about }}</p>

        <div v-if="character.anime && character.anime.length > 0" class="mb-4">
          <strong>Anime Roles:</strong>
          <ul>
            <li v-for="anime in character.anime" :key="anime.anime.mal_id">
              {{ anime.anime.title }} - {{ anime.role }}
            </li>
          </ul>
        </div>

        <div v-if="character.manga && character.manga.length > 0" class="mb-4">
          <strong>Manga Roles:</strong>
          <ul>
            <li v-for="manga in character.manga" :key="manga.manga.mal_id">
              {{ manga.manga.title }} - {{ manga.role }}
            </li>
          </ul>
        </div>

        <div
          v-if="character.voices && character.voices.length > 0"
          class="mb-4"
        >
          <strong>Voices:</strong>
          <ul>
            <li v-for="voice in character.voices" :key="voice.person.mal_id">
              {{ voice.person.name }} ({{ voice.language }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="isLoading">Loading...</div>
  <div v-else-if="hasError" class="text-red-500">{{ errorMessage }}</div>
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
