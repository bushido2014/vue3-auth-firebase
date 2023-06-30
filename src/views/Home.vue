<template>
  <div>
    <h3>Home Page</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores cumque
      modi ipsa.
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Home Page - Vue3 Firebase Authentication',
  meta: [
    {
      name: 'description',
      content: 'Home Page Vue3 Firebase Authentication',
    },
  ],
});
</script>
