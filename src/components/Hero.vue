<template>
  <header class="hero">
    <div class="hero-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d897027ddb65b12667550eeac7f228921c28f8d2e9d9e3e448406f43397f77c1?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
        alt="Hero Background"
        class="hero-background"
      />
      <div class="hero-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/87e085697bce9f02da312f943e9797fbccf3dd1c4b94fd4e5cfce5c52af58cac?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
          alt="Hero Logo"
          class="hero-logo"
        />
        <h1 class="hero-title">Pengangkutan Dan Penjualan Batu Bara Domestik & Internasional.</h1>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.9) 16.58%,
    rgba(255, 255, 255, 0) 72.38%
  );
  width: 100%;
  overflow: hidden;
}

.hero-container {
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 720px;
  width: 100%;
  padding: 35px 80px 109px;
  align-items: flex-end;
}

.hero-background {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: relative;
  display: flex;
  margin-bottom: -22px;
  width: 800px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-end;
}

.hero-logo {
  aspect-ratio: 0.96;
  object-fit: contain;
  object-position: center;
  width: 192px;
  max-width: 100%;
}

.hero-title {
  color: #00284e;
  font-size: 64px;
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 700;
  letter-spacing: -0.64px;
  text-align: right;
  margin-top: 16px;
}

.hero-button {
  border: none;
  border-radius: 8px;
  background-color: #ed8224;
  margin-top: 16px;
  padding: 12px 32px;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 991px) {
  .hero-container {
    padding: 35px 20px 100px;
  }

  .hero-title {
    font-size: 40px;
  }
}
</style>
