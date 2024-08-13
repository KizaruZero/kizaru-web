import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import AnimeDetails from "../views/AnimeDetails.vue";
import AnimePopular from "@/views/AnimePopular.vue";
import CharPopular from "@/views/CharPopular.vue";
import CharacterDetails from "@/views/CharacterDetails.vue";
import MangaView from "@/views/MangaView.vue";
import NewsView from "@/views/NewsView.vue";

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
    path: "/news",
    name: "NewsView",
    component: NewsView,
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
    path: "/popularChar",
    name: "popularChar",
    component: CharPopular,
  },
  {
    path: "/characters/:id",
    name: "CharacterDetails",
    component: CharacterDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
