<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>

<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Empowering</h2>
          <h2 class="text-gradient text-success mb-3">Smart City Solutions</h2>
          <p class="lead">
            Our platform is trusted by urban developers, municipal councils, and local tech innovators to build smarter, greener, and more efficient cities.
          </p>
        </div>
      </div>

      <div class="row mt-6">
        <DefaultReviewCard
          name="Eng. Tharindu Perera"
          date="2 days ago"
          review='"The dashboard made it easy for us to monitor real-time traffic data and manage city infrastructure with confidence."'
          :rating="5.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          name="Isuri Wijesinghe"
          date="1 week ago"
          review='"We integrated the energy consumption module in our local ward. The insights have already helped us reduce waste and optimize usage."'
          :rating="4.5"
        />
        <DefaultReviewCard
          name="Dr. Sameera Jayasuriya"
          date="3 weeks ago"
          review='"As a university researcher, this solution has helped streamline our data collection for environmental analytics in urban zones."'
          :rating="5.0"
        />
      </div>

      <hr class="horizontal dark my-5" />

      <div class="row">
        <div class="col-lg-2 col-md-4 col-6 ms-auto">
          <img class="w-100 opacity-6" src="@/assets/img/logos/gray-logos/logo-colombo.svg" alt="Colombo Municipal Council" />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img class="w-100 opacity-6" src="@/assets/img/logos/gray-logos/logo-uda.svg" alt="Urban Development Authority" />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img class="w-100 opacity-6" src="@/assets/img/logos/gray-logos/logo-ouu.svg" alt="Open University of Sri Lanka" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 ms-lg-0 ms-md-auto">
          <img class="w-100 opacity-6" src="@/assets/img/logos/gray-logos/logo-ceb.svg" alt="Ceylon Electricity Board" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 me-md-auto mx-md-0 mx-auto">
          <img class="w-100 opacity-6" src="@/assets/img/logos/gray-logos/logo-mwcsd.svg" alt="Ministry of Women & Child Affairs and Social Empowerment" />
        </div>
      </div>
    </div>
  </section>
</template>
