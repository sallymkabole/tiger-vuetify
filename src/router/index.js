import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requireLogin: true,
        title: "Dashboard",
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactView,
      meta: {
        requireLogin: true,
        title: "Contact",
      },
    },
  ],
});

export default router;
