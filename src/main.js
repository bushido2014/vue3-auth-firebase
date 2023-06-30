import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import { initializeApp } from 'firebase/app';
import './api';
import './style.css';
import App from './App.vue';
import router from './router';

const firebaseConfig = {
  apiKey: 'AIzaSyAIiRq0JrMvBlqWjD76865Kkrb0DcUXWvQ',
  authDomain: 'vue3-jwt.firebaseapp.com',
  projectId: 'vue3-jwt',
  storageBucket: 'vue3-jwt.appspot.com',
  messagingSenderId: '251195225703',
  appId: '1:251195225703:web:322d2370f68a690f4086c2',
};
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
const head = createHead();
app.use(head);
app.use(createPinia());
app.mount('#app');
