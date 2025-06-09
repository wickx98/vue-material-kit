<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-4 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-4">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Traffic Management"
                description="Transforming urban mobility through intelligent traffic lights, real-time transit updates, and optimized public transport routes. Our goal is to reduce congestion, travel time, and pollution for a more efficient commute."
                :count="70"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Energy Efficiency"
                description="Promoting sustainable energy practices by encouraging solar power, smart meters, and energy-conscious living. Together, we can lower carbon footprints and create more resilient power systems for our communities."
                :count="15"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Waste Management"
                description="Reimagining waste disposal with smart bins, community recycling programs, and waste-to-energy solutions. Proper management not only enhances public health but also protects the environment."
                :count="4"
                :duration="3000"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Urban Greening"
                description="Enhancing green spaces through tree planting, vertical gardens, and eco-friendly urban planning. A greener city means cooler temperatures, cleaner air, and improved well-being for everyone."
                :count="4"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
