import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contact from "@/views/Contact.vue";
import FAQ from "@/views/FAQView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
