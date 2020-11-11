import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import supabase from '@/plugins/supabase'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import('@/views/SignIn'),
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import('@/views/SignUp'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'is-active',
})

router.beforeEach((to, from, next) => {
  if (!store.getters['user/user'] || !store.getters['user/session']) {
    if (supabase.auth.session() && supabase.auth.user()) {
      store.dispatch('user/setUser', supabase.auth.user())
      store.dispatch('user/setSession', supabase.auth.session())
    }
  }

  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !supabase.auth.session()
  )
    next({ name: 'Sign In' })
  else next()
})

export default router
