<template>
  <section class="hero-section">
    <div class="hero">
      <div id="carousel-example" class="relative w-full">
        <!-- Carousel wrapper -->
        <div
          class="relative h-56 overflow-hidden rounded-lg sm:h-96 xl:h-96 2xl:h-96"
        >
          <div
            v-for="(slide, index) in slides"
            :key="index"
            :id="'carousel-item-' + (index + 1)"
            class="hidden duration-700 ease-in-out"
          >
            <img
              :src="slide.image"
              :alt="slide.alt"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
        >
          <button
            v-for="(slide, index) in slides"
            :key="'indicator-' + (index + 1)"
            :id="'carousel-indicator-' + (index + 1)"
            type="button"
            class="h-3 w-3 rounded-full"
            :aria-current="index === 0 ? 'true' : 'false'"
            :aria-label="'Slide ' + (index + 1)"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          id="data-carousel-prev"
          type="button"
          class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
          >
            <svg
              class="h-4 w-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          id="data-carousel-next"
          type="button"
          class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
          >
            <svg
              class="h-4 w-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from "vue";

import { Carousel } from "flowbite";

const slides = [
  { image: require("@/assets/img/vinland-cover.jpg"), alt: "Anime 1" },
  { image: require("@/assets/img/vinland-cover.jpg"), alt: "Anime 2" },
  { image: require("@/assets/img/vinland-cover.jpg"), alt: "Anime 3" },
  { image: require("@/assets/img/vinland-cover.jpg"), alt: "Anime 4" },
];

onMounted(() => {
  nextTick(() => {
    const carouselElement = document.getElementById("carousel-example");
    if (carouselElement) {
      const items = slides.map((slide, index) => ({
        position: index,
        el: document.getElementById(`carousel-item-${index + 1}`),
      }));

      const indicators = slides.map((_, index) => ({
        position: index,
        el: document.getElementById(`carousel-indicator-${index + 1}`),
      }));

      const options = {
        defaultPosition: 1,
        interval: 3000,
        indicators: {
          activeClasses: "bg-white dark:bg-gray-800",
          inactiveClasses:
            "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
          items: indicators,
        },
      };

      const instanceOptions = { id: "carousel-example", override: true };

      try {
        const carousel = new Carousel(
          carouselElement,
          items,
          options,
          instanceOptions
        );
        carousel.cycle();
        const $prevButton = document.getElementById("data-carousel-prev");
        const $nextButton = document.getElementById("data-carousel-next");

        $prevButton.addEventListener("click", () => carousel.prev());
        $nextButton.addEventListener("click", () => carousel.next());
      } catch (error) {
        console.error("Carousel initialization error: ", error);
      }
    } else {
      console.error("Carousel element not found");
    }
  });
});
</script>
