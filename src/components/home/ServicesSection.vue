<template>
  <section class="services-section">
    <h2 class="section-title">Layanan</h2>
    <div class="services-container">
      <article class="service-card">
        <div class="card-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f64a378489eea080d3b83c18d95f1b12605936e734a76a9b67715ecd7ad3942?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
            alt="Transportation Icon"
            class="service-icon"
          />
          <h3 class="service-title">Pengangkutan Batubara</h3>
          <p class="service-description">
            Kami menyediakan layanan pengangkutan batu bara yang andal, efisien, dan tepat waktu
            untuk mendukung distribusi ke berbagai tujuan domestik maupun internasional.
          </p>
        </div>
        <button class="service-button">
          <span>Pelajari Lebih Lanjut</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df05923da02a3d88d024d772f3d55d15e0e9c30ba61ccfb53682400961d0b6c9?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
            alt="Arrow"
            class="button-icon"
          />
        </button>
      </article>

      <article class="service-card">
        <div class="card-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d6844c4c9c2f50c2164dfbe874ccac200c56260c8ae0f3304830af8b7303355?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
            alt="Sales Icon"
            class="service-icon"
          />
          <h3 class="service-title">Penjualan Batubara</h3>
          <p class="service-description">
            Kami menyediakan batu bara berkualitas dengan layanan penjualan yang andal dan
            distribusi efisien untuk memenuhi permintaan pasar domestik dan internasional.
          </p>
        </div>
        <button class="service-button">
          <span>Pelajari Lebih Lanjut</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df05923da02a3d88d024d772f3d55d15e0e9c30ba61ccfb53682400961d0b6c9?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
            alt="Arrow"
            class="button-icon"
          />
        </button>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.services-section {
  background-color: #fff;
  display: flex;
  width: 100%;
  padding: 32px 48px;
  flex-direction: column;
  overflow: hidden;
}

.section-title {
  color: #144885;
  font-size: 2.5rem;
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  letter-spacing: 0.96px;
  text-align: center;
}

.services-container {
  display: flex;
  margin-top: 32px;
  width: 100%;
  align-items: center;
  gap: 16px;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  flex-wrap: wrap;
}

.service-card {
  border-radius: 28px;
  background-color: #e8edf3;
  min-width: 240px;
  min-height: 420px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.card-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #0e335e;
}

.service-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 120px;
  max-width: 100%;
}

.service-title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  margin-top: 24px;
}

.service-description {
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.32px;
  margin-top: 24px;
}

.service-button {
  border: none;
  border-radius: 8px;
  background-color: #ed8224;
  display: flex;
  margin-top: 16px;
  width: 100%;
  padding: 20px;
  gap: 16px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.button-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
}

@media (max-width: 991px) {
  .services-section {
    padding: 32px 20px;
  }

  .section-title {
    font-size: 40px;
  }

  .service-card {
    max-width: 100%;
  }
}
</style>
