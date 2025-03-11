<template>
  <section class="gallery-container">
    <header class="gallery-header">
      <h1 class="gallery-title">Galeri</h1>
    </header>

    <div class="carousel-wrapper">
      <button class="carousel-button prev" @click="previousImage" aria-label="Previous image">
        &#10094;
      </button>
      <div class="carousel">
        <transition-group name="fade-slide" tag="div" class="carousel-track">
          <figure
            v-for="(image, index) in visibleImages"
            :key="index"
            class="carousel-item"
            :class="{ highlighted: index === 1 }"
          >
            <div class="image-wrapper">
              <img :src="image.url" :alt="image.title" class="carousel-image" />
              <figcaption class="image-title">{{ image.title }}</figcaption>
            </div>
          </figure>
        </transition-group>
      </div>
      <button class="carousel-button next" @click="nextImage" aria-label="Next image">
        &#10095;
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'GalleryCarousel',
  setup() {
    const images = ref([
      {
        url: 'https://images.unsplash.com/photo-1599756719094-9e28479389c4',
        title: 'Tambang Batu Bara',
      },
      {
        url: 'https://plus.unsplash.com/premium_photo-1661963968707-cf062e54725b',
        title: 'Transportasi Batu Bara',
      },
      {
        url: 'https://images.unsplash.com/photo-1541587943171-46b1eacd11fa',
        title: 'Ekskavator di Tambang',
      },
      {
        url: 'https://thrivenisainik.com/wp-content/uploads/2017/08/coal_transportation_top.jpg',
        title: 'Industri Batu Bara',
      },
    ])

    const currentIndex = ref(0)

    const visibleImages = computed(() => {
      const total = images.value.length
      return [
        images.value[(currentIndex.value - 1 + total) % total], // Left Image
        images.value[currentIndex.value], // Center (Highlighted)
        images.value[(currentIndex.value + 1) % total], // Right Image
      ]
    })

    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length
    }

    const previousImage = () => {
      currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
    }

    return { images, currentIndex, nextImage, previousImage, visibleImages }
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

.gallery-container {
  text-align: center;
  padding: 20px;
}

.gallery-header {
  margin-bottom: 20px;
}

.gallery-title {
  color: #0e335e;
  font-size: 2.5rem;
  font-family: 'Oswald', sans-serif;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel {
  overflow: hidden;
  width: 1000px;
}

.carousel-track {
  display: flex;
  justify-content: center;
  gap: 20px;
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.carousel-item {
  width: 380px;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
  transform: scale(0.9);
}

.highlighted {
  width: 960px;
  opacity: 1;
  transform: scale(1.1);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 16 / 9;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out;
}

.image-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  font-family: 'Oswald', sans-serif;
}

.image-wrapper:hover .image-title {
  opacity: 1;
  transform: translateY(0);
}

.carousel-button {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 1.8rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.3s ease-in-out;
}

.prev {
  left: 15px;
}

.next {
  right: 15px;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
