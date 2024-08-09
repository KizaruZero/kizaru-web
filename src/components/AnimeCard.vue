<template>
  <router-link
    :to="{ name: 'AnimeDetails', params: { id: anime.mal_id } }"
    class="block"
  >
    <div
      class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <img
        :src="animeImage"
        :alt="anime.title"
        class="w-full h-64 object-cover"
      />
      <div class="p-4 flex flex-col flex-1">
        <h3 class="font-bold text-lg mb-2">{{ anime.title }}</h3>
        <p v-if="animeSynopsis" class="text-gray-600 text-sm flex-1">
          {{ animeSynopsis }}
        </p>
        <p v-else class="text-gray-600 text-sm flex-1">No synopsis available</p>
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
        ? `${this.anime.synopsis.substring(0, 100)}...`
        : null;
    },
  },
};
</script>
