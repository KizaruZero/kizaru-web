<template>
  <div class="flex flex-col h-1/2 bg-gray-900">
    <!-- Header -->
    <header class="bg-indigo-800 text-white p-6 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold tracking-tight text-center">ANIME TALKS</h1>
      <p class="text-center mt-2 text-lg">
        Welcome to Anime Talks, your go-to place for all things anime! Engage in
        real-time conversations with our interactive bot, designed to answer
        your questions, provide anime recommendations, and guide you to the best
        content tailored to your preferences. Start chatting now and explore the
        world of anime like never before!
      </p>
    </header>

    <!-- Chat area -->
    <div class="flex-1 overflow-hidden flex flex-col">
      <!-- Message list -->
      <div class="flex-1 overflow-y-auto p-6 space-y-4" ref="messageList">
        <div v-for="(message, index) in messages" :key="index" class="flex">
          <div
            :class="[
              'p-4 rounded-2xl shadow-md',
              message.isUser
                ? 'bg-indigo-500 text-white ml-auto'
                : 'bg-white text-gray-900',
            ]"
            class="max-w-xs"
          >
            {{ message.text }}
          </div>
        </div>
      </div>

      <!-- Input area -->
      <div class="p-4 bg-gray-800 border-t border-gray-700">
        <div class="flex space-x-3">
          <input
            v-model="userInput"
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Ask about anime..."
            class="flex-1 border border-gray-600 rounded-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          />
          <button
            @click="sendMessage"
            class="bg-indigo-600 text-white rounded-full px-6 py-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { chatAnime } from "../services/geminiService"; // Adjust the import path as needed

const messages = ref([]);
const userInput = ref("");
const messageList = ref(null);

const sendMessage = async () => {
  if (userInput.value.trim() === "") return;

  // Add user message
  messages.value.push({ text: userInput.value, isUser: true });

  // Get AI response
  try {
    const response = await chatAnime(userInput.value);
    messages.value.push({ text: response, isUser: false });
  } catch (error) {
    console.error("Error getting chat response:", error);
    messages.value.push({
      text: "Sorry, I couldn't process that. Could you try again?",
      isUser: false,
    });
  }

  // Clear input
  userInput.value = "";

  // Scroll to bottom
  await nextTick();
  if (messageList.value) {
    messageList.value.scrollTop = messageList.value.scrollHeight;
  }
};

onMounted(() => {
  // Add a welcome message
  messages.value.push({
    text: "Hello! I'm your anime chat assistant. What would you like to know about anime?",
    isUser: false,
  });
});
</script>
