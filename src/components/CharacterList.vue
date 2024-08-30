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
    <swiper-slide v-for="character in validAnimes" :key="character.mal_id">
      <CharacterCard :character="character" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { register } from "swiper/element/bundle";
import { defineProps, computed } from "vue";
import CharacterCard from "./CharacterCard.vue";

register();
const props = defineProps({
  characters: {
    type: Array,
    required: true,
  },
});

const breakpoints = {
  640: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
};

// Compute validAnimes
const validAnimes = computed(() =>
  props.characters.filter(
    (character) =>
      character && typeof character === "object" && character.mal_id
  )
);
</script>

<!-- <template>
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
    <swiper-slide v-for="character in validAnimes" :key="character.character.mal_id">
      <CharacterCard :character="character.character" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { register } from "swiper/element/bundle";
import { defineProps, computed } from "vue";
import CharacterCard from "./CharacterCard.vue";

register();

const props = defineProps({
  characters: {
    type: Array,
    required: true,
  },
});

const breakpoints = {
  640: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
};

// Compute validAnimes
const validAnimes = computed(() =>
  props.characters.filter(
    (character) =>
      character && typeof character === "object" && character.character && character.character.mal_id
  )
);
</script>
 -->
