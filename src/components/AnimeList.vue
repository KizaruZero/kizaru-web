<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <AnimeCard
      v-for="anime in validAnimes"
      :key="anime.mal_id"
      :anime="anime"
    />
  </div>
</template>

<script>
import AnimeCard from "./AnimeCard.vue";

export default {
  name: "AnimeList",
  components: {
    AnimeCard,
  },
  props: {
    animes: {
      type: Array,
      required: true,
    },
  },
  computed: {
    validAnimes() {
      return this.animes.filter(
        (anime) => anime && typeof anime === "object" && anime.mal_id
      );
    },
  },
};
</script>
