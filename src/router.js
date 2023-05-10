import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'
import MainSearchBar from '@/components/MainSearchBar.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/settings', name: 'Settings', component: MainSearchBar},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
