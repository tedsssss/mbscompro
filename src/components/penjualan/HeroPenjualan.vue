<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-text-column">
        <div class="hero-text-wrapper">
          <h1 class="hero-title">Penjualan Batubara</h1>
          <p class="hero-description">
            Kami menyediakan batu bara berkualitas dengan layanan penjualan yang andal dan
            distribusi efisien untuk memenuhi permintaan pasar domestik dan internasional.
          </p>
        </div>
      </div>
      <div class="hero-image-column">
        <div class="hero-images">
          <div class="image-grid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4165103ff46497b9b9afc6709e552966e89bece0"
              alt="Coal Transportation"
              class="hero-image-1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfdce1c1e1670b3b00d03a3b26c712f034644c55"
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
