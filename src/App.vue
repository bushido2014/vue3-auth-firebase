<template>
  <header class="header">
    <div class="container flex justify-between">
      <div>
        <ul class="nav">
          <li>
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="nav">
          <li>
            <router-link to="/signup" v-if="!token" class="nav-link"
              >SignUp</router-link
            >
          </li>
          <li>
            <router-link to="/signin" v-if="!token" class="nav-link"
              >SignIn</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard" class="nav-link" v-if="token"
              >Dashboard</router-link
            >
          </li>
          <li>
            <router-link
              to="/signin"
              class="nav-link logout"
              v-if="token"
              @click.prevent="logout"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const token = computed(() => authStore.userInfo.token);

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'));
  if (tokens) {
    authStore.userInfo.token = tokens.token;
    authStore.userInfo.refreshToken = tokens.refreshToken;
    authStore.userInfo.expiresIn = tokens.expiresIn;
  }
  //console.log(authStore.userInfo);
};
const logout = () => {
  authStore.logout();
  localStorage.removeItem('userTokens');
  router.push('/signin');
};
checkUser();
</script>
<style scoped>
.header {
  @apply py-5 bg-slate-700 mb-3 text-white;
}
.nav {
  @apply flex;
}
.nav .nav-link {
  @apply px-3 py-2;
}
.logout {
  @apply border rounded rounded-md;
}
</style>
