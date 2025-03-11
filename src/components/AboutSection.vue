<template>
  <section class="about-section">
    <div class="about-container">
      <article class="about-content">
        <h2 class="about-title">Tentang Kami</h2>
        <p class="about-description">
          <strong>PT MANUNGGAL BARA SEJAHTERA</strong> adalah perusahaan yang bergerak di bidang
          pengangkutan dan penjualan batu bara, baik untuk pasar domestik maupun internasional.
          Perusahaan kami telah berkomitmen untuk memberikan layanan transportasi batu bara yang
          andal dan efisien serta memenuhi kebutuhan pasar ekspor yang terus berkembang.
          <br />Dengan pengalaman bertahun-tahun dalam industri ini, kami telah menjadi mitra
          terpercaya bagi perusahaan-perusahaan besar di sektor energi dan industri terkait.
        </p>
      </article>
      <div class="about-images">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcdd0a1f31f1bbf9a207a06e469a3b0c664267f6aa1ea177bcae3504d72174e4?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
          alt="About Image 1"
          class="about-image-1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5646c643028fd640fb8741d90a6e32f6321a92595c0458dec1e79ec96c3bfcd1?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
          alt="About Image 2"
          class="about-image-2"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-section {
  background-color: #144885;
  width: 100%;
  padding: 57px 40px;
  overflow: hidden;
}

.about-container {
  display: flex;
  gap: 20px;
}

.about-content {
  width: 59%;
  color: #fff;
}

.about-title {
  font-family: Oswald, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 1.2;
}

.about-description {
  margin-top: 32px;
  max-width: 744px;
  font-family: Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.about-images {
  width: 41%;
  display: flex;
  margin-top: 5px;
  flex-direction: column;
}

.about-image-1 {
  aspect-ratio: 1.3;
  object-fit: contain;
  object-position: center;
  width: 411px;
  border-radius: 24px;
  align-self: flex-end;
  max-width: 100%;
}

.about-image-2 {
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 220px;
  border-radius: 30px;
  max-width: 100%;
}

@media (max-width: 991px) {
  .about-section {
    padding: 57px 20px;
  }

  .about-container {
    flex-direction: column;
  }

  .about-content {
    width: 100%;
  }

  .about-title {
    font-size: 40px;
  }

  .about-images {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
