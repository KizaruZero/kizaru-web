<template>
  <router-link
    :to="{ name: 'CharacterDetails', params: { id: character.mal_id } }"
    class="block"
  >
    <div class="shadow-md overflow-hidden h-full w-full text-center">
      <img
        :src="characterImage"
        :alt="character.name"
        class="w-full h-full object-cover"
      />
      <div class="p-4">
        <h3 class="font-bold text-lg mb-2">{{ character.name }}</h3>
        <p v-if="character.anime" class="text-gray-600 text-sm">
          {{ character.anime[0]?.name }}
        </p>
        <h3 class="text-white">
          <span class="text-white rounded-full text-sm">{{
            character.nicknames?.join(", ") || "No Nicknames"
          }}</span>
        </h3>
      </div>
    </div>
  </router-link>
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
