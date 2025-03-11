<template>
  <section class="benefits-section">
    <div class="benefits-container">
      <div class="benefits-content">
        <h2 class="benefits-title">Keuntungan Menggunakan Jasa Pengangkutan Kami</h2>
        <div class="benefits-grid">
          <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item">
            <img :src="benefit.icon" :alt="benefit.title" class="benefit-icon" />
            <div class="benefit-text">
              <h3 class="benefit-title">{{ benefit.title }}</h3>
              <p class="benefit-description">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BenefitItem } from '../types'
const benefits: BenefitItem[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/585288dcdf360487b7f3d5a00e449b7f09bdb0b74444e42275f2fa4d7a91f466?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    title: 'Tepat Waktu',
    description: 'Kami memastikan pengiriman dilakukan sesuai jadwal tanpa keterlambatan.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5956c315b003155df4258c4f00cc5544099f171e6be598f561feca3605a93269?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    title: 'Jangkauan Luas',
    description: 'Melayani berbagai daerah dengan jaringan transportasi yang luas dan andal.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/187675af854e4c8bd1d8eb0ea7c8d30acf9c9edd4659577920c7e5df9a7a3603?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    title: 'Aman & Terpercaya',
    description: 'Barang Anda akan dikirim dengan sistem keamanan terbaik hingga sampai di tujuan.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e7475a10c85c9f820f7e0051de8ef581637f3bb57bec8872846f0aa0f781f87d?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    title: 'Layanan 24/7',
    description: 'Tim kami siap membantu dan melayani kebutuhan Anda kapan saja.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6155649a20882799c0d14bdab10248789668c31ddba0e695b6278754df328640?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    title: 'Biaya Kompetitif',
    description: 'Nikmati layanan berkualitas dengan harga yang tetap terjangkau dan transparan.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33b3d515d1af975526db1c780e7be05b129e093e4d302767a225997be8bdd61f?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2',
    title: 'Fleksibel & Efisien',
    description:
      'Menyediakan solusi transportasi yang dapat disesuaikan dengan kebutuhan bisnis Anda.',
  },
]
</script>

<style scoped>
.benefits-section {
  display: flex;
  width: 100%;
  padding: 32px 0;
  flex-direction: column;
  align-items: stretch;
  color: #144885;
  justify-content: center;
}

.benefits-container {
  width: 100%;
}

.benefits-content {
  display: flex;
  width: 100%;
  padding: 0 80px;
  flex-direction: column;
  align-items: stretch;
}

.benefits-title {
  text-align: center;
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 2.5rem;
  letter-spacing: -0.48px;
  margin-bottom: 40px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolom */
  gap: 40px;
  justify-content: center;
  align-items: start;
  width: 100%;
}

.benefit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 240px;
}

@media (max-width: 600px) {
  .benefits-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.benefit-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 80px;
}

.benefit-text {
  margin-top: 32px;
}

.benefit-title {
  font-family:
    Oswald,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 28px;
  font-weight: 500;
  margin: 0;
}

.benefit-description {
  font-family:
    Montserrat,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.4px;
  margin-top: 15px;
}

@media (max-width: 991px) {
  .benefits-content {
    max-width: 100%;
    padding: 0 20px;
  }

  .benefits-title {
    font-size: 40px;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr); /* Jadi 2 kolom di layar lebih kecil */
  }
}
</style>
