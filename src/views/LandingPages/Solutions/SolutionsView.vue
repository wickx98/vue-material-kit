<script setup>
import { onMounted, onUnmounted } from "vue";

import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

import bg0 from "@/assets/img/bg11.jpg";

import Typed from "typed.js";

const body = document.getElementsByTagName("body")[0];

onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <DefaultNavbar
    :action="{
      route: 'javascript:;',
      label: 'Get Started',
      color: 'btn-white',
    }"
    transparent
  />

  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{
        backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/15/147/646/city-traffic-wallpaper-preview.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Innovative <span id="typed" class="text-white"></span> for Cities
            </h1>
            <div id="typed-strings">
              <h1>Smart Traffic Control</h1>
              <h1>Energy Saving Systems</h1>
              <h1>Waste Recycling Tech</h1>
              <h1>Urban Greening</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Harness technology to build sustainable, efficient, and greener cities.
            </p>
            <button type="submit" class="btn bg-white text-dark">
              Explore Solutions
            </button>
            <h6 class="text-white mb-2 mt-5">Follow us on</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"><i class="fab fa-facebook text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-instagram text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-twitter text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-linkedin text-lg text-white"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <section class="text-center py-10">
      <h2 class="text-4xl font-bold mb-4">🛠️ Smart City Solutions</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Explore the cutting-edge technologies that solve urban challenges and improve quality of life.
      </p>

      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-danger display-4 mb-3">🚦</div>
              <h5 class="card-title">Smart Traffic Control</h5>
              <p class="card-text text-muted">
                Adaptive traffic signals and AI-powered congestion prediction.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-warning display-4 mb-3">⚡</div>
              <h5 class="card-title">Energy Saving Systems</h5>
              <p class="card-text text-muted">
                IoT-enabled smart grids and efficient power distribution.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">♻️</div>
              <h5 class="card-title">Waste Recycling Tech</h5>
              <p class="card-text text-muted">
                Sensor-driven waste collection and automated sorting.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">🌳</div>
              <h5 class="card-title">Urban Greening</h5>
              <p class="card-text text-muted">
                Vertical gardens, green rooftops, and community parks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>
