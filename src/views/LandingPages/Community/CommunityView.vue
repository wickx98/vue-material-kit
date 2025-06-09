<script setup>
import { onMounted, onUnmounted } from "vue";

import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

import bg0 from "@/assets/img/bg10.jpg";

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
      label: 'Join Now',
      color: 'btn-white',
    }"
    transparent
  />

  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      style="background-image: url('https://amazingarchitecture.com/storage/9524/responsive-images/salesforce-transit-center-san-francisco-usa___media_library_original_787_443.jpg'); background-size: cover; background-position: center;"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Join Our <span id="typed" class="text-white"></span>
            </h1>
            <div id="typed-strings">
              <h1>Community Events</h1>
              <h1>Local Meetups</h1>
              <h1>Workshops</h1>
              <h1>Festivals</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Connect with your neighbors and engage in vibrant community activities.
            </p>
            <button type="submit" class="btn bg-white text-dark">
              Register Now
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
      <h2 class="text-4xl font-bold mb-4">🎉 Upcoming Community Events</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Explore the latest happenings around your neighborhood and get involved.
      </p>

      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-primary display-4 mb-3">📅</div>
              <h5 class="card-title">Summer Festival</h5>
              <p class="card-text text-muted">
                Celebrate local culture with music, food, and games. July 15, 2025.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-success display-4 mb-3">🤝</div>
              <h5 class="card-title">Neighborhood Cleanup</h5>
              <p class="card-text text-muted">
                Join hands to keep our streets clean and green. August 5, 2025.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-warning display-4 mb-3">🛠️</div>
              <h5 class="card-title">DIY Workshop</h5>
              <p class="card-text text-muted">
                Learn handy skills to improve your home. September 12, 2025.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100 border-0 shadow">
            <div class="card-body text-center">
              <div class="text-danger display-4 mb-3">🎭</div>
              <h5 class="card-title">Local Theater Night</h5>
              <p class="card-text text-muted">
                Experience community storytelling and performances. October 20, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <DefaultFooter />
</template>
