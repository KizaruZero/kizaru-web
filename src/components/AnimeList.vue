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
    <swiper-slide v-for="anime in validAnimes" :key="anime.mal_id">
      <AnimeCard :anime="anime" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { defineProps, computed } from "vue";
import AnimeCard from "./AnimeCard.vue";
import { register } from "swiper/element/bundle";

register();

// Define props
const props = defineProps({
  animes: {
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

// Compute validAnimes
const validAnimes = computed(() =>
  props.animes.filter(
    (anime) => anime && typeof anime === "object" && anime.mal_id
  )
);
</script>
