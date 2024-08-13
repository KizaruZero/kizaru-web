<template>
  <router-link
    :to="{ name: 'AnimeDetails', params: { id: anime.mal_id } }"
    class="block"
  >
    <div
      class="bg-black text-white rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full w-full"
    >
      <img
        :src="animeImage"
        :alt="anime.title"
        class="w-full h-64 object-cover rounded-lg"
      />
      <div class="p-4 flex flex-col flex-1">
        <p class="text-gray-400 font-medium text-sm">
          <span v-if="anime.genres.length"></span>
          <span v-for="(genre, index) in anime.genres" :key="index">
            {{ genre.name
            }}<span v-if="index < anime.genres.length - 1">, </span>
          </span>
        </p>
        <h3 class="font-bold text-gray-300 text-lg">{{ anime.title }}</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AnimeCard",
  props: {
    anime: {
      type: Object,
      required: true,
    },
  },
  computed: {
    animeImage() {
      return (
        this.anime.images?.jpg?.image_url ||
        "https://via.placeholder.com/225x350?text=No+Image"
      );
    },
    animeSynopsis() {
      return this.anime.synopsis
        ? `${this.anime.synopsis.substring(0, 50)}...`
        : null;
    },
  },
};
</script>
