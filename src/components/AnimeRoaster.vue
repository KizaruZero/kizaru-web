<template>
  <body class="flex items-center justify-center">
    <div class="w-full bg-gray-800 rounded-xl shadow-lg overflow-hidden m-4">
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1"
        >
          Anime Critic
        </div>
        <h1 class="block mt-1 text-2xl leading-tight font-bold text-white mb-2">
          Roast My Anime
        </h1>
        <p class="mt-2 text-white-600">
          Enter your favorite (or least favorite) anime title and watch it get
          roasted!
        </p>
        <div class="mt-6">
          <input
            v-model="animeTitle"
            type="text"
            placeholder="Enter anime title"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          />
        </div>
        <div class="mt-4">
          <button
            @click="roastAnime"
            class="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Roast It!
          </button>
        </div>
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 class="font-semibold text-gray-800 mb-2">Roast Result:</h2>
          <p
            v-if="roast"
            class="text-gray-600 italic"
            placeholder="Your roast will appear here..."
          >
            {{ roast }}
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { roastAnime } from "../services/geminiService";

export default {
  name: "AnimeRoaster",
  data() {
    return {
      animeTitle: "",
      roast: "",
    };
  },
  methods: {
    async roastAnime() {
      if (this.animeTitle) {
        this.roast = await roastAnime(this.animeTitle);
      }
    },
  },
};
</script>
