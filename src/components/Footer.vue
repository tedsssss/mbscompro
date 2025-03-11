<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f814980e7b6fb25324ad57f3dcd607716adbd346856f38d23eb8d693aeb0594?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
          alt="Company Logo"
          class="footer-logo"
        />
      </div>

      <div class="address-container">
        <div class="company-info">
          <div class="company-header">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1616871bb5c6dd518ecc71c56dcb0e390c42cb25f3b20031bb12c740d6d375f0?placeholderIfAbsent=true&apiKey=929a5d6373ee43d387f6653f419f46f2"
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
      </div>

      <div class="contact-container">
        <h3 class="contact-title">Hubungi Kami</h3>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-label">Email:</span>
            <span class="contact-value">ptmanunggalbarasejahtera@gmail.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">No Telepon:</span>
            <span class="contact-value">0811 7516 767</span>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">© 2025 PT MANUNGGAL BARA SEJAHTERA</div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background-color: #fff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
}

.footer-content {
  display: flex;
  width: 100%;
  padding: 64px 80px 64px 80px;
  align-items: start;
  gap: 128px;
  flex-wrap: wrap;
}

.logo-container {
  flex-grow: 1;
  flex-shrink: 1;
  width: 147px;
}

.footer-logo {
  aspect-ratio: 0.96;
  object-fit: contain;
  object-position: center;
  width: 184px;
  max-width: 100%;
}

.address-container {
  min-width: 240px;
  font-family: Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  color: #0f172a;
  font-weight: 400;
}

.company-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.location-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
}

.company-name {
  font-family: Oswald, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  color: #0e335e;
  font-weight: 600;
}

.address {
  line-height: 30px;
  margin-top: 16px;
}

.contact-container {
  min-width: 240px;
}

.contact-title {
  color: #0e335e;
  font-family: Oswald, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 600;
}

.contact-info {
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  gap: 8px;
  font-family: Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  color: #081e38;
}

.contact-label {
  font-weight: 500;
}

.contact-value {
  font-weight: 400;
}

.copyright {
  background-color: #ed8224;
  width: 100%;
  padding: 8px;
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  color: #0e335e;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 991px) {
  .footer-content {
    padding: 64px 20px;
  }
}
</style>
