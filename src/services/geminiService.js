const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];
const genAI = new GoogleGenerativeAI(
  process.env.VUE_APP_GEMINI_API_KEY,
  safetySettings
);

export async function roastAnime(animeTitle) {
  // Access your API key as an environment variable (see "Set up your API key" above)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Tulis sebuah roast singkat untuk anime dengan nama "${animeTitle}" . Roast ini harus sangat sarkastik, lucu, kejam, dan sedikit menyindir para penggemarnya. Pastikan untuk membuatnya terdengar sangat tidak menyukai anime ini, tetapi tetap dengan nada yang menghibur dan penuh humor. gunakan bahasa indonesia yang asik,lucu gaul jangan kaku.`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error roasting anime:", error);
    return "Failed to roast the anime. Please try again.";
  }
}

export async function roastWaifu(waifuName) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Tulis sebuah roast singkat yang sarkastik,lucu, dan tajam tentang waifu "${waifuName}". Fokus pada betapa tidak realistisnya karakter ini sebagai waifu dan seberapa buruk keputusan seseorang jika mereka memilihnya sebagai waifu mereka. Sertakan sindiran tajam yang akan membuat orang tertawa sekaligus sedikit merasa kesal jika mereka adalah penggemar waifu tersebut dan buat menjadi pilihan waifu terburuk. jangan gunakan bahasa kaku, gunakan dalam bahasa gaul dan lucu.`;
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error roasting waifu:", error);
    return "Failed to roast the waifu. Please try again.";
  }
}

export async function roastChar(charName) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Tulis sebuah roast singkat yang sangat sarkastik dan lucu tentang karakter anime bernama "${charName}". roasting betapa tidak bergunanya karakter ini dalam cerita, betapa klisenya sifatnya, dan betapa tidak menyenangkannya dia sebagai protagonis (atau antagonis). Buatlah roast ini terdengar sangat jahat namun tetap membuat orang tertawa. gunakan bahasa indonesia yang asik dan lucu jangan kaku.`;
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error roasting Char:", error);
    return "Failed to roast the Char. Please try again.";
  }
}

// export async function chatAnime(userQuestion) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//   const prompt = `You are an AI chatbot specialized in discussing everything related to anime. Your job is to answer questions, give recommendations, and guide users to relevant anime content. You should only respond to queries about anime, manga, characters, studios, genres, and other anime-related topics. If a user asks about anything outside the scope of anime, politely redirect the conversation back to anime. Always ensure your responses are informative, friendly, and focused solely on anime.
//   Answer the following question: "${userQuestion}"
//   Answer with the same langauge with user question, and make sure the answer is informative and friendly.`;
//   try {
//     const result = await model.generateContent(prompt);
//     return result.response.text();
//   } catch (error) {
//     console.error("Error roasting Char:", error);
//     return "Failed to roast the Char. Please try again.";
//   }
// }

// Array untuk menyimpan history percakapan
let chatHistory = [];

export async function chatAnime(userQuestion) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Tambahkan pertanyaan terbaru ke history chat
  chatHistory.push(`User: ${userQuestion}`);

  // Gabungkan seluruh history percakapan dengan prompt baru
  const prompt = `
    You are an AI chatbot specialized in discussing everything related to anime. Your job is to answer questions, give recommendations, and guide users to relevant anime content. You should only respond to queries about anime, manga, characters, studios, genres, and other anime-related topics. If a user asks about anything outside the scope of anime, politely redirect the conversation back to anime. Always ensure your responses are informative, friendly, and focused solely on anime.

    Conversation history:
    ${chatHistory.join("\n")}

    Answer with the same language as the user's question, and make sure the answer is informative and friendly.
    AI: 
  `;

  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    // Tambahkan respons AI ke history chat
    chatHistory.push(`AI: ${responseText}`);

    return responseText;
  } catch (error) {
    console.error("Error during chat:", error);
    return "Sorry, something went wrong. Please try again.";
  }
}
