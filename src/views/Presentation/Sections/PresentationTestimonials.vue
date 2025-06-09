<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>

<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Empowering Smarter Cities</h2>
          <h2 class="text-gradient text-success mb-3">
            For a sustainable urban future
          </h2>
          <p class="lead">
            Explore how innovative technology and community-driven efforts are transforming our city into a greener, safer, and more efficient place to live.
          </p>
        </div>
      </div>

      <div class="row mt-6">
        <DefaultReviewCard
          name="Traffic Heatmap"
          date="Live Data"
          review='"Visualize congestion levels across major roads in your city and plan your commute efficiently."'
          :rating="4.8"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          name="Smart Waste Bins"
          date="Updated Weekly"
          review='"Smart bins in Galle monitor waste levels and notify municipal services for timely collection, reducing overflow."'
          :rating="4.9"
        />
        <DefaultReviewCard
          name="Urban Greening Projects"
          date="Community Led"
          review='"Over 200 trees planted in Matara through our neighborhood campaign. Citizens can now track green coverage near their homes."'
          :rating="5.0"
        />
      </div>

      <hr class="horizontal dark my-5" />

      <div class="row">
        <div class="col-lg-2 col-md-4 col-6 ms-auto">
          <img class="w-100 opacity-6" src="@/assets/img/logos/local-authority.svg" alt="Local Authority" />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img class="w-100 opacity-6" src="@/assets/img/logos/green-energy.svg" alt="Green Energy" />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img class="w-100 opacity-6" src="@/assets/img/logos/smart-transport.svg" alt="Smart Transport" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 ms-lg-0 ms-md-auto">
          <img class="w-100 opacity-6" src="@/assets/img/logos/recycling.svg" alt="Recycling" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 me-md-auto mx-md-0 mx-auto">
          <img class="w-100 opacity-6" src="@/assets/img/logos/community.svg" alt="Community" />
        </div>
      </div>
    </div>
  </section>
</template>
