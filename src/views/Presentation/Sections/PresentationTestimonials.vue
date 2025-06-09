<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>

<template>
  <section class="py-7">
    <div class="container">
      <!-- Header -->
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

      <!-- Review Cards -->
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

      <!-- Divider -->
      <hr class="horizontal dark my-5" />

      <!-- Problem Section -->
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h3 class="text-center mb-4 text-dark fw-bold">Problems and Sub-Problems</h3>
          <p class="text-muted">
            Rapid urbanization has introduced several pressing challenges that impact the quality of life in cities. The main problems identified for this project include:
          </p>

          <h5 class="mt-4 fw-semibold">Main Problems:</h5>
          <ul class="text-muted">
            <li><strong>Traffic Congestion:</strong> Urban centers often experience severe traffic delays due to poor infrastructure planning and rising vehicle numbers.</li>
            <li><strong>Inefficient Waste Management:</strong> Ineffective systems for collection, segregation, and disposal contribute to environmental pollution.</li>
            <li><strong>High Energy Consumption:</strong> Without proper monitoring, urban households and businesses consume energy inefficiently, increasing costs and carbon emissions.</li>
            <li><strong>Low Public Engagement:</strong> Citizens often lack platforms to contribute ideas or stay informed about local urban initiatives.</li>
          </ul>

          <h5 class="mt-4 fw-semibold">Sub-Problems:</h5>
          <ul class="text-muted">
            <li><strong>Lack of Centralized Platform:</strong> There is no unified digital space to educate the public on smart city concepts and initiatives.</li>
            <li><strong>Limited Access to Local Information:</strong> Important community events, updates, and services are often not communicated effectively.</li>
            <li><strong>Absence of Participatory Tools:</strong> Tools that allow users to provide feedback or suggest improvements are missing from most city portals.</li>
          </ul>

          <h5 class="mt-4 fw-semibold">Constraints:</h5>
          <ul class="text-muted">
            <li>The solution must be frontend-only, meaning no backend server or database integration.</li>
            <li>All content, layout, and design elements must be original and tailored to the local context.</li>
            <li>The application must be fully responsive, ensuring usability across desktop, tablet, and mobile devices.</li>
          </ul>
        </div>
      </div>

      <!-- Logos Section -->
      <div class="row mt-6">
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
