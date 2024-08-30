import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import AnimeDetails from "../views/AnimeDetails.vue";
import AnimePopular from "@/views/AnimePopular.vue";
import CharPopular from "@/views/CharPopular.vue";
import CharacterDetails from "@/views/CharacterDetails.vue";
import MangaView from "@/views/MangaView.vue";
import RoastingView from "@/views/RoastingView.vue";
import ChatView from "@/views/ChatView.vue";
import MangaDetails from "@/views/MangaDetails.vue";
import Anime2023 from "@/views/Anime2023View.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "SearchView",
    component: SearchView,
  },
  {
    path: "/manga",
    name: "MangaView",
    component: MangaView,
  },
  {
    path: "/search",
    name: "SearchView",
    component: SearchView,
  },
  {
    path: "/anime/:id",
    name: "AnimeDetails",
    component: AnimeDetails,
  },
  {
    path: "/animePopular",
    name: "animePopular",
    component: AnimePopular,
  },
  {
    path: "/anime2023",
    name: "Anime2023",
    component: Anime2023,
  },
  {
    path: "/popularChar",
    name: "popularChar",
    component: CharPopular,
  },
  {
    path: "/characters/:id",
    name: "CharacterDetails",
    component: CharacterDetails,
  },
  {
    path: "/manga/:id",
    name: "MangaDetails",
    component: MangaDetails,
  },
  {
    path: "/roasting",
    name: "Roasting",
    component: RoastingView,
  },
  {
    path: "/chatAnime",
    name: "chatAnime",
    component: ChatView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
