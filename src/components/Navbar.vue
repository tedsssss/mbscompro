<template>
  <nav class="navbar">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/02296445cbf14921b1f1d147fb2d731db7d4d8f1bea164711d0d0d903b4b7889?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
      alt="Company Logo"
      class="navbar-logo"
      href="/"
    />
    <button class="hamburger" @click="toggleMenu">☰</button>
    <div :class="['nav-links', { show: menuOpen }]">
      <a href="/" class="nav-link">Tentang Kami</a>

      <!-- Dropdown Layanan -->
      <div class="dropdown">
        <button class="nav-link dropdown-btn" @click="toggleDropdown">Layanan ▼</button>
        <div v-if="dropdownOpen" class="dropdown-menu">
          <a href="/pengangkutan" class="dropdown-item">Pengangkutan Batubara</a>
          <a href="/penjualan" class="dropdown-item">Penjualan Batubara</a>
        </div>
      </div>

      <a href="/contact" class="nav-link">Kontak</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const dropdownOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value

  if (!menuOpen.value) {
    dropdownOpen.value = false
  }
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

watch(route, () => {
  menuOpen.value = false
  dropdownOpen.value = false
})
</script>

<style scoped>
.navbar {
  background-color: #fff;
  display: flex;
  min-height: 90px;
  width: 100%;
  padding: 0 48px;
  align-items: center;
  gap: 100px;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: #0e335e;
  font-weight: 600;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}

.navbar-logo {
  aspect-ratio: 0.95;
  object-fit: contain;
  object-position: center;
  width: 57px;
  margin: auto 0;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 80px;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  font-feature-settings:
    'liga' off,
    'clig' off;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

.dropdown-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: inherit;
  font-weight: 600;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 200px;
  border-radius: 4px;
  z-index: 10;
}

.dropdown-item {
  padding: 10px 20px;
  text-decoration: none;
  color: #0e335e;
  font-weight: 500;
  display: block;
  transition: background 0.3s;
}

.dropdown-item:hover {
  background: #f2f4f9;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    gap: 20px;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-links.show {
    display: flex;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    min-width: auto;
  }
}
</style>
