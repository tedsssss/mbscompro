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
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  gap: 40px;
}

.logo-container {
  flex: 1 1 200px;
}

.footer-logo {
  width: 100%;
  max-width: 150px;
  object-fit: contain;
}

.address-container,
.contact-container {
  flex: 1 1 300px;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  color: #0f172a;
  font-weight: 400;
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

.copyright {
  background-color: #ed8224;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #0e335e;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .company-header {
    justify-content: center;
  }

  .contact-info {
    align-items: center;
  }
}
</style>
