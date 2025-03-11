<template>
  <nav class="navbar">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/02296445cbf14921b1f1d147fb2d731db7d4d8f1bea164711d0d0d903b4b7889?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
      alt="Company Logo"
      class="navbar-logo"
    />
    <div class="nav-links">
      <a href="#about" class="nav-link">Tentang Kami</a>
      <a href="#services" class="nav-link">Layanan</a>
      <a href="#contact" class="nav-link">Kontak</a>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  background-color: #fff;
  display: flex;
  min-height: 90px;
  width: 100%;
  padding: 0 48px;
  align-items: center;
  gap: 100px;
  font-family: Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  color: #0e335e;
  font-weight: 600;
  justify-content: space-between;
  flex-wrap: wrap;
}

.navbar-logo {
  aspect-ratio: 0.95;
  object-fit: contain;
  object-position: center;
  width: 57px;
  align-self: stretch;
  margin: auto 0;
}

.nav-links {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin: auto 0;
  align-items: center;
  gap: 80px;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  font-feature-settings: 'liga' off, 'clig' off;
}

@media (max-width: 991px) {
  .navbar {
    padding: 0 20px;
  }
}
</style>
