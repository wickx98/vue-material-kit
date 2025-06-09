<script setup>
import { onMounted, onUnmounted } from "vue";

import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

import bg0 from "@/assets/img/bg9.jpg";

import Typed from "typed.js";

import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

import setMaterialInput from "@/assets/js/material-input";

const body = document.getElementsByTagName("body")[0];

onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  setMaterialInput();

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
      label: 'Send Feedback',
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
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              We value your <span id="typed" class="text-white"></span>
            </h1>
            <div id="typed-strings" class="d-none">
              <h1>Feedback</h1>
              <h1>Suggestions</h1>
              <h1>Thoughts</h1>
              <h1>Questions</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Please share your thoughts to help us improve and serve you better.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="row">
      <div class="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
        <div
          class="w-100 h-100 border-radius-lg"
          :style="{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
          }"
          loading="lazy"
        ></div>
      </div>

      <div class="col-lg-6 p-4">
        <div class="card shadow-lg p-4">
          <h3 class="text-center mb-4 text-success">Send Us Your Feedback</h3>
          <form id="feedback-form" autocomplete="off">
            <div class="mb-3">
              <MaterialInput
                type="text"
                label="Full Name"
                placeholder="Your full name"
                class="input-group-static"
              />
            </div>
            <div class="mb-3">
              <MaterialInput
                type="email"
                label="Email Address"
                placeholder="your.email@example.com"
                class="input-group-static"
              />
            </div>
            <div class="mb-3">
              <MaterialTextArea
                label="Your Message"
                placeholder="Write your feedback here..."
                :rows="6"
                class="input-group-static"
              />
            </div>
            <div class="text-center">
              <MaterialButton variant="gradient" color="success">
                Send Message
              </MaterialButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <DefaultFooter />
</template>
