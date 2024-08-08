<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white font-bold text-xl"
        >Anime Website</router-link
      >
      <div>
        <router-link to="/" class="text-white mr-4">Home</router-link>
        <router-link to="/search" class="text-white mr-4">Search</router-link>
        <router-link to="/animePopular" class="text-white mr-4"
          >Anime Popular</router-link
        >
        <router-link to="/popularChar" class="text-white"
          >Popular Character</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarView",
};
</script>
