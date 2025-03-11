<template>
  <section class="contact-container">
    <header class="contact-header">
      <h1 class="contact-title">Kontak Kami</h1>
    </header>

    <div class="contact-content">
      <div class="company-info">
        <div class="company-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1616871bb5c6dd518ecc71c56dcb0e390c42cb25f3b20031bb12c740d6d375f0"
            alt="Location Icon"
            class="location-icon"
          />
          <h3 class="company-name">PT MANUNGGAL BARA SEJAHTERA</h3>
        </div>
        <p class="address">
          Menara 165, 9th Floor JI. TB. Simatupang Kav. 1 <br />Jakarta Selatan 12560, Indonesia.
        </p>
        <p class="address">
          JI. Serayu No. 1 C, Kel. Labuh Baru Timur Kec. <br />Payung Sekaki, Kota Pekanbaru,
          Provinsi Riau.
        </p>
      </div>

      <div class="contact-container">
        <h3 class="contact-title">Hubungi Kami</h3>
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-label">Email:</div>
            <div class="contact-value">ptmanunggalbarasejahtera@gmail.com</div>
          </div>
          <div class="contact-item">
            <div class="contact-label">No Telepon:</div>
            <div class="contact-value">0811 7516 767</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="bottom-image">
    <img src="/gunung.png" alt="Decorative Bottom Image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactPage',
})
</script>

<style scoped>
.contact-container {
  text-align: center;
  padding: 20px;
}

.contact-header {
  margin-bottom: 20px;
}

.contact-title {
  color: #0e335e;
  font-size: 2.5rem;
  font-family: 'Oswald', sans-serif;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.company-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.location-icon {
  width: 20px;
}

.company-name {
  font-family: Oswald, sans-serif;
  font-size: 20px;
  color: #0e335e;
  font-weight: 600;
}

.address {
  line-height: 1.5;
  margin-top: 10px;
  font-size: 16px;
  color: #0f172a;
}

.contact-title {
  color: #0e335e;
  font-family: Oswald, sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  color: #081e38;
}

.contact-label {
  font-weight: 500;
}

.contact-value {
  font-weight: 400;
}

.bottom-image {
    width: 100%;
    position: relative;
    bottom: 0;
    left: 0;
  }
  
  .bottom-image img {
    width: 100%;
    display: block;
  }
</style>
