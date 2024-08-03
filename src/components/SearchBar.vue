<template>
  <div class="mb-4">
    <input
      v-model="searchQuery"
      @input="$emit('search', searchQuery)"
      type="text"
      placeholder="Search anime..."
      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>
