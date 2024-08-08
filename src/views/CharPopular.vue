<template>
  <div>
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Top Characters</h2>
      <div v-if="isLoadingCharacters">Loading...</div>
      <div v-else-if="hasErrorCharacters" class="text-red-500">
        {{ errorMessageCharacters }}
      </div>
      <CharacterList v-else :characters="topCharacters" />
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import CharacterList from "@/components/CharacterList.vue";

export default {
  name: "HomeView",
  components: {
    CharacterList,
  },
  computed: {
    ...mapState(["topCharacters"]),
    ...mapGetters([
      "isLoading",
      "hasError",
      "errorMessage",
      "isLoadingCharacters",
      "hasErrorCharacters",
      "errorMessageCharacters",
    ]),
  },
  methods: {
    ...mapActions(["fetchTopCharacters"]),
  },
  created() {
    this.fetchTopCharacters();
  },
};
</script>
