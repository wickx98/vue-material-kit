<script setup>
import { onMounted, onUnmounted } from "vue";
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

const body = document.getElementsByTagName("body")[0];

onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
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
      class="page-header min-vh-50"
      :style="{
        backgroundImage: 'url(https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg?auto=compress&cs=tinysrgb&w=600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">Local Urban Issues</h1>
            <p class="lead text-white opacity-8 mt-3">
              Explore the critical challenges faced by cities like Galle and Matara as they grow rapidly. Understanding these issues helps us propose smarter, localized solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <section class="text-center py-10">
      <h2 class="text-4xl font-bold mb-4">🚧 Challenges Facing Our Cities</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        From congestion and pollution to lack of civic awareness, these issues reflect the urgent need for smart city planning and technological intervention.
      </p>

      <div class="row">
        <!-- Traffic Congestion -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 shadow h-100">
            <div class="card-body text-center">
              <div class="text-danger display-4 mb-3">🚦</div>
              <h5 class="card-title">Traffic Congestion</h5>
              <p class="card-text text-muted">
                Galle's city center suffers from extreme congestion during peak hours, due to poor infrastructure design and rising vehicle numbers.
              </p>
            </div>
          </div>
        </div>

        <!-- Waste Management -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 shadow h-100">
            <div class="card-body text-center">
              <div class="text-warning display-4 mb-3">🗑️</div>
              <h5 class="card-title">Inefficient Waste Disposal</h5>
              <p class="card-text text-muted">
                Residential areas in Matara face overflowing garbage due to irregular collection and limited awareness about recycling.
              </p>
            </div>
          </div>
        </div>

        <!-- Energy Usage -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 shadow h-100">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">⚡</div>
              <h5 class="card-title">High Energy Consumption</h5>
              <p class="card-text text-muted">
                Public buildings use outdated lighting and cooling systems, leading to excessive electricity usage and increased carbon footprint.
              </p>
            </div>
          </div>
        </div>

        <!-- Community Engagement -->
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card border-0 shadow h-100">
            <div class="card-body text-center">
              <div class="text-info display-4 mb-3">🗣️</div>
              <h5 class="card-title">Low Public Engagement</h5>
              <p class="card-text text-muted">
                Many citizens are unaware of local initiatives or lack a platform to provide feedback and suggestions for urban improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>
