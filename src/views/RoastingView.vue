<template>
  <section class="roasting mt-5">
    <div class="w-full rounded-xl shadow-lg overflow-hidden">
      <div
        class="bg-gradient-to-r bg-gray-800 to-indigo-600 py-12 px-4 shadow-lg rounded-lg mb-2 mx-4"
      >
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-extrabold text-white mb-4 tracking-tight">
            ROASTING PAGE
          </h1>
          <p class="text-xl text-purple-100 leading-relaxed">
            Welcome to the ultimate anime roast zone! Here you can unleash your
            wit on Anime, Anime Movies, Characters, Waifus, and more. Get ready
            to serve some
            <span class="font-semibold text-yellow-300">spicy</span>
            critiques!
          </p>
        </div>
      </div>
      <div class="roastAnime">
        <roastAnime />
      </div>
      <div class="roastWaifu">
        <roastWaifu />
      </div>
      <div class="roastChar">
        <roastChar />
      </div>
    </div>
  </section>
</template>

<script setup>
import roastAnime from "@/components/AnimeRoaster.vue";
import roastWaifu from "@/components/WaifuRoaster.vue";
import roastChar from "@/components/CharRoaster.vue";
</script>
