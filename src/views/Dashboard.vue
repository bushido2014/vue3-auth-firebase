<template>
  <div class="container mt-5">Welcome {{ user.email }}</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import axiosApiInstance from '../api';
import { useRouter } from 'vue-router';
import { useHead } from '@vueuse/head';

const authStore = useAuthStore();
const router = useRouter();
const user = ref({ email: '' });
useHead({
  title: 'Dashboard Page',
  meta: [
    {
      name: 'description',
      content: 'Dashboard Page',
    },
  ],
});
onMounted(async () => {
  const userData = await authStore.getUserData();
  user.value.email = userData.email;
});
</script>
