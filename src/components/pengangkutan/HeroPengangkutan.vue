<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-text-column">
        <div class="hero-text-wrapper">
          <h1 class="hero-title">PengangkutanBatubara</h1>
          <p class="hero-description">
            Kami menyediakan layanan pengangkutan batu bara yang andal, efisien, dan tepat waktu
            untuk mendukung distribusi ke berbagai tujuan domestik maupun internasional.
          </p>
        </div>
      </div>
      <div class="hero-image-column">
        <div class="hero-images">
          <div class="image-grid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7032daaa95849f017336fc34969e463993fd96c302c9f01fb08315e1ebbf48e4?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
              alt="Coal Transportation"
              class="hero-image-1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fc40c697891a2a454ebd82cca901a34396ce677584a589dcea260b132126dbb?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
              alt="Coal Transportation"
              class="hero-image-2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: #fff;
  width: 100%;
  padding: 66px 80px;
  overflow: hidden;
}

.hero-content {
  gap: 20px;
  display: flex;
}

.hero-text-column {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50%;
}

.hero-text-wrapper {
  max-width: 524px;
}

.hero-title {
  color: #144885;
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 3rem;
  letter-spacing: 0.96px;
  margin: 0;
}

.hero-description {
  color: #0e335e;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-top: 4px;
}

.hero-image-column {
  width: 50%;
}

.hero-images {
  margin-top: 9px;
  flex-grow: 1;
}

.image-grid {
  gap: 20px;
  display: flex;
}

.hero-image-1 {
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 35%;
  border-radius: 30px;
  margin-top: 116px;
}

.hero-image-2 {
  aspect-ratio: 1.61;
  object-fit: contain;
  object-position: center;
  width: 65%;
  border-radius: 24px;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .hero-section {
    max-width: 100%;
    padding: 66px 20px;
  }

  .hero-content {
    flex-direction: column;
  }

  .hero-text-column,
  .hero-image-column {
    width: 100%;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-image-1 {
    margin-top: 40px;
  }
}
</style>
