<template>
  <div class="min-h-screen bg-black text-white">
    <NavbarView />
    <HeroView class="mt-2" />
    <div class="container mx-auto p-4">
      <router-view></router-view>
    </div>
    <FooterView />
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import HeroView from "./components/HeroView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    NavbarView,
    HeroView,
    FooterView,
  },
};
</script>
