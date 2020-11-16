import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/plugins/firebase'

const routes = [
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
    path: '/',
    name: 'Root',
    component: () => import('@/views/Root'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta: { requiresAuth: true },
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile'),
        meta: { requiresAuth: true },
      },
      {
        path: '/customers',
        name: 'Cust',
        component: () => import('@/views/Customers'),
        meta: { requiresAuth: true },
        children: [
          {
            path: '',
            name: 'Customers',
            component: () => import('@/views/AllCustomers'),
          },
          {
            path: 'add',
            name: 'Add Customer',
            props: true,
            component: () => import('@/views/CustomerForm'),
          },
          {
            path: ':id/edit',
            name: 'Edit Customer',
            props: true,
            component: () => import('@/views/CustomerForm'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'is-active',
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next({ name: 'Sign In' })
  } else {
    next()
  }
})

export default router
