<template>
  <section class="vision-mission">
    <h2 class="section-title">Visi dan Misi</h2>
    <div class="cards-container">
      <article class="vision-card">
        <div class="card-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bb2eab8c9cb293c2e0d46982deb5026ba4b456d7a07788462e013f5d9d5ff8b?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
            alt="Vision Icon"
            class="card-icon"
          />
          <div class="card-text">
            <h3 class="card-title">VISI KAMI</h3>
            <p class="card-description">
              Sebagai perusahaan perdagangan batu bara internasional yang akan membangun
              perekonomian dalam dan luarnegeri, serta menjadiperusahaan yang memiliki Integritas
              Tinggi dan komitmen akan kualitas dan tanggung jawab terhadap lingkungan.
            </p>
          </div>
        </div>
      </article>
      <article class="mission-card">
        <div class="card-content">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d41ca336a85f366e531e0af9711be5e8b7fb74824095769a9003d0edeab7373b?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
            alt="Mission Icon"
            class="card-icon"
          />
          <div class="card-text">
            <h3 class="card-title">MISI KAMI</h3>
            <p class="card-description">
              Pengelolaan dan peningkatan sumber energi batu bara dengan mutu mineral yang baik
              serta menyelenggarakan sistem pendukung bagi pemerintah dibidang pertambangan batubara
              dengan kegiatan pembinaan pengawasan dan pengendalian yang lebih berdaya saing dan
              berawawasan lingkungan.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.vision-mission {
  display: flex;
  width: 100%;
  padding: 32px 0;
  flex-direction: column;
  align-items: stretch;
}

.section-title {
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 2.5rem;
  color: #0e335e;
  text-align: center;
  letter-spacing: 0.96px;
}

.cards-container {
  border-radius: 8px;
  border: 1px solid #acb9db;
  align-self: center;
  display: flex;
  margin-top: 24px;
  width: 1360px;
  max-width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}

.vision-card,
.mission-card {
  border: 1px solid #cbd3e8;
  display: flex;
  min-width: 240px;
  padding: 24px;
  flex-direction: column;
  color: #0e335e;
  flex: 1;
}

.card-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
}

.card-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 96px;
}

.card-text {
  margin-top: 32px;
}

.card-title {
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.64px;
}

.mission-card .card-title {
  color: #144885;
}

.card-description {
  color: #0e335e;
  text-align: justify;
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 24px;
}

@media (max-width: 991px) {
  .section-title {
    font-size: 40px;
  }

  .vision-card,
  .mission-card {
    padding: 20px;
  }
}
</style>
