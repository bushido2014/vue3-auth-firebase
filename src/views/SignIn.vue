<template>
  <form class="signin">
    <h2 class="text-center text-2xl my-3">Sing In</h2>
    <div v-if="authStore.error" class="error">{{ authStore.error }}</div>
    <div class="my-3">
      <input
        type="email"
        v-model="email"
        placeholder="email"
        class="form-input rounded-md block w-full"
      />
    </div>
    <div class="my-3">
      <input
        type="password"
        v-model="password"
        class="form-input rounded-md block w-full"
        placeholder="password"
      />
    </div>
    <Loader v-if="authStore.loader" />
    <div class="my-3" v-else>
      <button
        class="
          flex
          w-full
          justify-center
          rounded-md
          bg-indigo-600
          px-3
          py-3
          font-semibold
          text-white
          shadow-sm
          hover:bg-indigo-500
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-indigo-600
        "
        @click="signin"
      >
        Sign in
      </button>
    </div>
    <div class="py-3">
      <p>
        Are you already registered?
        <router-link
          to="/signup"
          class="
            font-semibold
            leading-6
            text-indigo-600
            hover:text-indigo-500
            px-3
          "
          >Sign up</router-link
        >
      </p>
    </div>
  </form>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import Loader from '../components/Loader.vue';
import { useHead } from '@vueuse/head';
const authStore = useAuthStore();
const router = useRouter();

const email = ref();
const password = ref();

const signin = async () => {
  await authStore.auth(
    { email: email.value, password: password.value },
    'signin'
  );
  router.push('/dashboard');
};
useHead({
  title: 'Sign In Page',
  meta: [
    {
      name: 'description',
      content: 'Sign In Page',
    },
  ],
});
</script>
