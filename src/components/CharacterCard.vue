<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      :src="characterImage"
      :alt="character.name"
      class="w-full h-64 object-cover"
    />
    <div class="p-4">
      <h3 class="font-bold text-lg mb-2">{{ character.name }}</h3>
      <p v-if="character.anime" class="text-gray-600 text-sm">
        {{ character.anime[0]?.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  computed: {
    characterImage() {
      return (
        this.character.images?.jpg?.image_url ||
        "https://via.placeholder.com/225x350?text=No+Image"
      );
    },
  },
};
</script>
