<template>
    <section class="clients-container">
      <header class="clients-header">
        <h2 class="clients-title">Klien Kami</h2>
        <p class="clients-subtitle">Kami bekerja sama dengan klien terbaik</p>
      </header>
      <div class="clients-grid">
        <div v-for="(client, index) in clients" :key="index" class="client-card">
          <img :src="client.logo" :alt="client.name" class="client-logo" />
        </div>
      </div>
    </section>
    <div class="bottom-image">
      <img src="/gunung.png" alt="Decorative Bottom Image" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'ClientsSection',
    setup() {
      const clients = ref([
        { name: 'Ahrefs', logo: 'https://logo.clearbit.com/ahrefs.com' },
        { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
        { name: 'HelpScout', logo: 'https://logo.clearbit.com/helpscout.com' },
        { name: 'Jotform', logo: 'https://logo.clearbit.com/jotform.com' },
        { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
        { name: 'Notion', logo: 'https://logo.clearbit.com/notion.so' },
        { name: 'LinkedIn', logo: 'https://logo.clearbit.com/linkedin.com' },
        { name: 'Circle', logo: 'https://logo.clearbit.com/circle.so' },
      ])
  
      return { clients }
    },
  })
  </script>
  
  <style scoped>
  .clients-container {
    text-align: center;
    padding: 60px 20px;
    position: relative;
  }
  
  .clients-header {
    margin-bottom: 30px;
  }
  
  .clients-title {
    font-size: 2.5rem;
    color: #0e335e;
    font-family: 'Oswald', sans-serif;
  }
  
  .clients-subtitle {
    font-size: 1.2rem;
    color: #555;
  }
  
  .clients-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .client-card {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .client-logo {
    max-width: 140px;
    max-height: 60px;
  }
  
  .bottom-image {
    width: 100%;
    position: relative;
    bottom: 0;
    left: 0;
  }
  
  .bottom-image img {
    width: 100%;
    display: block;
  }
  </style>
  