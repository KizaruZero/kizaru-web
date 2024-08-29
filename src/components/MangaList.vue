<template>
  <swiper
    :pagination="{ clickable: true }"
    :space-between="20"
    :slides-per-view="1"
    :breakpoints="breakpoints"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :navigation="true"
  >
    <swiper-slide v-for="manga in validMangas" :key="manga.mal_id">
      <MangaCard :manga="manga" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { defineProps, computed } from "vue";
import MangaCard from "./MangaCard.vue";
import { register } from "swiper/element/bundle";

register();

// Define props
const props = defineProps({
  mangas: {
    type: Array,
    required: true,
  },
});

// Define breakpoints object

const breakpoints = {
  640: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
};

// Compute validmangas
const validMangas = computed(() =>
  props.mangas.filter(
    (manga) => manga && typeof manga === "object" && manga.mal_id
  )
);
</script>
