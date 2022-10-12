import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contact from "@/views/Contact.vue";
import FAQ from "@/views/FAQView.vue";
import Test from "@/views/test.vue";
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
    path: "/test",
    name: "test",
    component: Test,
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }  else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }else {
      return { top: 0 }
    }
  },
});

export default router;
