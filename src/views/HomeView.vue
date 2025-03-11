<template>
  <main class="landing-page">
    <div class="main-content">
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <GallerySection />
      <ClientSection />
    </div>
  </main>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
import AboutSection from '../components/AboutSection.vue'
import VisionMissionSection from '../components/VisionMissionSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import GallerySection from '../components/Gallery.vue'
import ClientSection from '../components/ClientList.vue'
</script>

<style scoped>
.landing-page {
  width: 100vw;
  background-color: #f2f4f9;
}
</style>
