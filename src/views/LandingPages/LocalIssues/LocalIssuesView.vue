<script setup>
import { onMounted, onUnmounted } from "vue";

// Example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

// Background image
import bg0 from "@/assets/img/bg9.jpg";

// Typed.js animation
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
      label: 'Buy Now',
      color: 'btn-white',
    }"
    transparent
  />

  <!-- Header with Typed.js -->
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Smart Solutions for <span id="typed" class="text-white"></span>
            </h1>
            <div id="typed-strings">
              <h1>urban issues</h1>
              <h1>city life</h1>
              <h1>sustainable growth</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Discover how smart technologies are helping cities solve common
              challenges and build a better future.
            </p>
            <button type="submit" class="btn bg-white text-dark">
              Learn More
            </button>
            <h6 class="text-white mb-2 mt-5">Connect with us</h6>
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

  <!-- Main content card -->
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <section class="text-center py-10">
      <h2 class="text-4xl font-bold mb-4">🌆 Local Urban Issues</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Explore how Smart City innovations address critical challenges in urban living.
      </p>

      <div class="row">
        <!-- Card 1 -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-danger display-4 mb-3">🚦</div>
              <h5 class="card-title">Traffic Management</h5>
              <p class="card-text text-muted">
                Optimize traffic with real-time signals and smart routing systems.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-warning display-4 mb-3">⚡</div>
              <h5 class="card-title">Energy Efficiency</h5>
              <p class="card-text text-muted">
                Promote green energy and smart grids for reduced consumption.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">♻️</div>
              <h5 class="card-title">Waste Management</h5>
              <p class="card-text text-muted">
                Improve collection and recycling through smart bins and sensors.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">🌳</div>
              <h5 class="card-title">Urban Greening</h5>
              <p class="card-text text-muted">
                Create healthier environments with parks, trees, and vertical gardens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>
