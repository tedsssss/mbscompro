<template>
  <main class="landing-page">
    <div class="main-content">
      <Hero />
      <Benefit />
      <Contact />
    </div>
  </main>
</template>

<script setup lang="ts">
import Hero from '../../components/pengangkutan/HeroPengangkutan.vue'
import Benefit from '../../components/pengangkutan/BenefitPengangkutan.vue'
import Contact from '../../components/contact/ContactUsSection.vue'
</script>

<style scoped>
.landing-page {
  width: 100vw;
  background-color: #f2f4f9;
}
</style>
