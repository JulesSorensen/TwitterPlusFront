import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import SettingsView from '../views/SettingsView.vue';
import ProfileView from '../views/ProfileView.vue';

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
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
  },
  {
    path: '/:catchAll(.*)*',
    name: "notfound",
    component: NotFoundView,
  }
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
      fetch('/checkToken', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => {
        res.json().then((data) => {
          if(data.error) {
            localStorage.removeItem('token')
            next('/login')
          } else {
            next()
          }
        })
      })
    }
  }
})

export default router
