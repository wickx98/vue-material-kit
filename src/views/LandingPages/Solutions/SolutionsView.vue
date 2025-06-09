<script setup>
import { onMounted, onUnmounted } from "vue";

import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

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
        <!-- Smart Traffic Control -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-danger display-4 mb-3">🚦</div>
              <h5 class="card-title">Smart Traffic Control</h5>
              <p class="card-text text-muted">
                Our city roads face severe congestion during peak hours. This solution implements AI-based adaptive traffic signals that adjust in real-time based on traffic flow. Combined with GPS data and vehicle sensors, it reduces waiting time and improves fuel efficiency for commuters.
              </p>
              
            </div>
          </div>
        </div>

        <!-- Energy Saving Systems -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-warning display-4 mb-3">⚡</div>
              <h5 class="card-title">Energy Saving Systems</h5>
              <p class="card-text text-muted">
                Smart grids powered by IoT manage energy distribution efficiently, preventing wastage. Automated street lighting and solar-powered public buildings reduce electricity bills while promoting renewable energy use across the city.
              </p>
              
            </div>
          </div>
        </div>

        <!-- Waste Recycling Tech -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">♻️</div>
              <h5 class="card-title">Waste Recycling Tech</h5>
              <p class="card-text text-muted">
                Smart bins equipped with fill-level sensors notify collectors in real time. Recyclable and non-recyclable items are automatically sorted using machine learning, streamlining waste management and improving recycling rates in densely populated areas.
              </p>
              
            </div>
          </div>
        </div>

        <!-- Urban Greening -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">🌳</div>
              <h5 class="card-title">Urban Greening</h5>
              <p class="card-text text-muted">
                Greener cities cool down urban heat zones. Initiatives like rooftop gardens, vertical farming, and tree planting campaigns increase oxygen levels, reduce CO₂, and promote community wellness. Local schools and offices are encouraged to adopt these methods.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>
