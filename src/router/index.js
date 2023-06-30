import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Dashboard from '../views/Dashboard.vue';
import { useAuthStore } from '../stores/auth';
const routes = [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/signup',
    component: SignUp,
    meta: {
      auth: false,
    },
  },
  {
    path: '/signin',
    component: SignIn,
    meta: {
      auth: false,
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.auth && !authStore.userInfo.token) {
    next('/signin');
  } else if (!to.meta.auth && authStore.userInfo.token) {
    next('/dashboard');
  } else {
    next();
  }
});
export default router;
