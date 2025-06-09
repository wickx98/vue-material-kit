import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import CommunityView from "../views/LandingPages/Community/CommunityView.vue";
import SolutionsView from "../views/LandingPages/Solutions/SolutionsView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import LocalIssuesView from "../views/LandingPages/LocalIssues/LocalIssuesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/solution",
      name: "solution",
      component: SolutionsView,
    },
    {
      path: "/pages/landing-pages/community",
      name: "community",
      component: CommunityView,
    },
    {
      path: "/pages/landing-pages/feedback",
      name: "feedback",
      component: ContactView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/pages/landing-pages/local-issues",
      name: "local-issues",
      component: LocalIssuesView,
    },
  ],
});

export default router;
