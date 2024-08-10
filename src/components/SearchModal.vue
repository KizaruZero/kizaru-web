<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div class="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">Search Results</h2>
          <button
            @click="$emit('close')"
            class="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-4">
          <!-- Replace this with your search results -->
          <div v-if="results.length === 0" class="text-gray-500">
            No results found.
          </div>
          <ul v-else>
            <li
              v-for="result in results"
              :key="result.id"
              class="py-2 border-b border-gray-200"
            >
              {{ result.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  results: Array,
});

const emit = defineEmits(["close"]);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
