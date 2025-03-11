<template>
  <main class="landing-page">
    <Navbar />
    <div class="main-content">
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <Footer />
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import AboutSection from './components/AboutSection.vue'
import VisionMissionSection from './components/VisionMissionSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.landing-page {
  padding-bottom: 402px;
  background-color: #f2f4f9;
  overflow: hidden;
}

.main-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
}

@media (max-width: 991px) {
  .landing-page {
    padding-bottom: 100px;
  }
}
</style>
