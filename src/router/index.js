import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import AnimeDetails from "../views/AnimeDetails.vue";
import AnimePopular from "@/views/AnimePopular.vue";
import CharPopular from "@/views/CharPopular.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
