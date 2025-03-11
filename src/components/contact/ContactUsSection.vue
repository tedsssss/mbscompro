<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-content">
        <h2 class="contact-title">Hubungi Kami</h2>
        <div class="contact-buttons">
          <button
            v-for="button in contactButtons"
            :key="button.type"
            class="contact-button"
            :style="{ backgroundColor: button.backgroundColor }"
          >
            <img :src="button.icon" :alt="button.text" class="button-icon" />
            <span class="button-text">{{ button.text }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContactButton } from '../types'

const contactButtons: ContactButton[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/26ff6e6a60eb69556095751147a63566ad7c37c881ee34afd1a7b77678ae7d9f?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    text: 'Hubungi Kami via Email',
    type: 'email',
    backgroundColor: '#ed8224',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2e9e2e7a1e52bee4d00ab3ded37031f250897ec37b5911752b42da07254ec0e9?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    text: 'Hubungi Kami via No Telepon',
    type: 'phone',
    backgroundColor: '#1ea33b',
  },
]
</script>

<style scoped>
.contact-section {
  background-color: #fff;
  display: flex;
  width: 100%;
  padding: 48px 80px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.contact-container {
  width: 913px;
  max-width: 100%;
}

.contact-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
}

.contact-title {
  color: #144885;
  text-align: center;
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 2.5rem;
  letter-spacing: 0.96px;
  margin-bottom: 40px;
}

.contact-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  white-space: nowrap;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  color: #fff;
}

.contact-button {
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  display: flex;
  min-width: 240px;
  padding: 12px 33px;
  gap: 14px;
  cursor: pointer;
}

.button-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
}

.button-text {
  font-feature-settings:
    'liga' off,
    'clig' off;
  align-self: stretch;
  margin: auto 0;
  color: #fff;
}

@media (max-width: 991px) {
  .contact-section {
    padding: 48px 20px;
  }

  .contact-title {
    font-size: 40px;
  }

  .contact-button {
    padding: 12px 20px;
  }
}
</style>
