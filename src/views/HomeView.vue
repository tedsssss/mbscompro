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
import Hero from '../components/home/Hero.vue'
import AboutSection from '../components/home/AboutSection.vue'
import VisionMissionSection from '../components/home/VisionMissionSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import GallerySection from '../components/home/Gallery.vue'
import ClientSection from '../components/home/ClientList.vue'
</script>

<style scoped>
.landing-page {
  width: 100vw;
  background-color: #f2f4f9;
}
</style>
