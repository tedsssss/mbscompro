import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PengangkutanView from '../views/layanan/PengangkutanView.vue'
import PenjualanView from '../views/layanan/PenjualanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/pengangkutan',
      name: 'pengangkutan',
      component: PengangkutanView,
    },
    {
      path: '/penjualan',
      name: 'penjualan',
      component: PenjualanView,
    },
  ],
})

export default router
