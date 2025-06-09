<script setup>
import { onMounted, onUnmounted } from "vue";
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import bg0 from "@/assets/img/bg13.jpg";

const body = document.getElementsByTagName("body")[0];

onMounted(() => {
  body.classList.add("about-us", "bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("about-us", "bg-gray-200");
});
</script>

<template>
  <DefaultNavbar
    :action="{
      route: '#',
      label: 'Get Involved',
      color: 'btn-white',
    }"
    transparent
  />

  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center mx-auto my-auto">
            <h1 class="text-white">Welcome to SmartCityNow</h1>
            <p class="lead mb-4 text-white opacity-8">
              Our mission is to empower urban communities by promoting technology-driven, sustainable solutions
              to real-world city challenges such as traffic congestion, energy overuse, and waste management.
              <br /><br />
              Built with love by aspiring developers from Sri Lanka, this platform educates, inspires, and connects
              citizens with local initiatives—making smarter living a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section class="py-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4">
          <h4 class="text-gradient text-success">Our Vision</h4>
          <p>
            To create a greener, smarter, and more connected city by using modern web technologies and citizen-driven insights.
          </p>
        </div>
        <div class="col-md-4">
          <h4 class="text-gradient text-success">Our Mission</h4>
          <p>
            Encourage awareness and engagement through visual tools, local data, and feedback channels that highlight urban challenges and innovative solutions.
          </p>
        </div>
        <div class="col-md-4">
          <h4 class="text-gradient text-success">Who We Are</h4>
          <p>
            A group of passionate software engineering undergraduates from the Open University of Sri Lanka, committed to building smarter futures.
          </p>
        </div>
      </div>
    </div>
  </section>

  <DefaultFooter />
</template>
