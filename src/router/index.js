import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/views/HomePage.vue'
import BookDescription from '../components/views/BookDescComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/books',
    name: 'books',
    component:BookDescription
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
