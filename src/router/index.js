import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import AnimeDetails from "../views/AnimeDetails.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
