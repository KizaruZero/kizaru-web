<template>
  <router-link
    :to="{ name: 'MangaDetails', params: { id: manga.mal_id } }"
    class="block"
  >
    <div
      class="bg-black text-white rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full w-full"
    >
      <img
        :src="mangaImage"
        :alt="manga.title"
        class="w-full h-96 object-cover rounded-lg"
      />
      <div class="p-4 flex flex-col flex-1">
        <p class="text-gray-400 font-medium text-sm">
          <span v-if="manga.genres.length"></span>
          <span v-for="(genre, index) in manga.genres" :key="index">
            {{ genre.name
            }}<span v-if="index < manga.genres.length - 1">, </span>
          </span>
        </p>
        <h3 class="font-bold text-gray-300 text-lg">{{ manga.title }}</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "mangaCard",
  props: {
    manga: {
      type: Object,
      required: true,
    },
  },
  computed: {
    mangaImage() {
      return (
        this.manga.images?.jpg?.image_url ||
        "https://via.placeholder.com/225x350?text=No+Image"
      );
    },
    mangaSynopsis() {
      return this.manga.synopsis
        ? `${this.manga.synopsis.substring(0, 50)}...`
        : null;
    },
  },
};
</script>
