import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
  {
    path: '/login/:message',
    name: 'loginn',
    component: LoginView,
    props: true,
    meta: { withoutAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    props: true,
    meta: { withoutAuth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: { withoutAuth: true }
  },
  {
    path: '/:catchAll(.*)*',
    name: "notfound",
    component: NotFoundView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta?.withoutAuth)) {
    next()
  } else {
    if (localStorage.getItem('token')) {
      next()
      return
    }
    next('/login')
  }
})

export default router
