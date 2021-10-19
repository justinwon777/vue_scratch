import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Guide from '../views/Guide.vue'
// import Builder from '../views/Builder.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  // {
  //   path: '/builder',
  //   name: 'Builder',
  //   component: Builder
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
