<script setup>
import { onMounted } from "vue";

import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

import image from "@/assets/img/illustrations/illustration-signin.jpg";

import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: '/events',
            color: 'bg-gradient-success',
            label: 'Join Events',
          }"
        />
      </div>
    </div>
  </div>

  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <!-- Left Image Section -->
          <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
          >
            <div
              class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }"
              loading="lazy"
            ></div>
          </div>

          <!-- Right Feedback Form -->
          <div
            class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
          >
            <div
              class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
            >
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg p-3"
                >
                  <h3 class="text-white mb-0">Feedback & Suggestions</h3>
                </div>
              </div>

              <div class="card-body">
                <p class="pb-3">
                  Help us improve <strong>Urban Plus</strong> by sharing your ideas, reporting local issues,
                  or suggesting features you'd love to see on the platform.
                </p>

                <form id="feedback-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Full Name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          label="Email"
                          placeholder="urbanplus@smartcity.lk"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="feedback"
                        class="input-group-static mb-4"
                        :rows="6"
                        placeholder="Write your suggestions, concerns, or ideas..."
                        >Your feedback is valuable to us!</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          class="mt-3 mb-0"
                          >Submit Feedback</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- End of Form -->
        </div>
      </div>
    </div>
  </section>

  <DefaultFooter />
</template>
