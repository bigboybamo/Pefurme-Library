import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import WomenPerf from './views/WomenPerf.vue'
import MenPerf from './views/MenPerf.vue'
import Perfume from './views/Perfume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Menperf',
    name: 'MenPerf',
    component: MenPerf
  },
  {
    path: '/WomenPerf',
    name: 'WomenPerf',
    component: WomenPerf
  },
  {
    path: '/perfumes/:gender/:id',
    name: 'Perfume',
    component: Perfume
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
