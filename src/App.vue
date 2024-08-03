<template>
  <div class="min-h-screen bg-gray-100">
    <NavbarView />
    <div class="container mx-auto p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";

export default {
  name: "App",
  components: {
    NavbarView,
  },
};
</script>
