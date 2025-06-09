<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png"; // Replace with your own logo

defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "Urban Plus",
      logo: logoDark,
      route: "/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "#"
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "#"
      },
      {
        icon: '<i class="fab fa-instagram text-lg opacity-8"></i>',
        link: "#"
      },
      {
        icon: '<i class="fab fa-linkedin text-lg opacity-8"></i>',
        link: "#"
      }
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "Explore",
        items: [
          { name: "About Us", href: "/about" },
          { name: "Local Issues", href: "/issues" },
          { name: "Smart Solutions", href: "/solutions" },
          { name: "Community Events", href: "/events" }
        ]
      },
      {
        name: "Engage",
        items: [
          { name: "Feedback", href: "/feedback" },
          { name: "Submit Idea", href: "/submit" },
          { name: "Join Us", href: "/join" }
        ]
      },
      {
        name: "Help",
        items: [
          { name: "Contact", href: "/contact" },
          { name: "FAQs", href: "/faq" }
        ]
      }
    ]
  }
});
</script>

<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="Urban Plus Logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-md-2 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm text-dark text-uppercase">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link text-dark" :href="item.href">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              © {{ new Date().getFullYear() }} Urban Plus — Smart City Solutions Project.
              Designed by BSE Students @ The Open University of Sri Lanka.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
