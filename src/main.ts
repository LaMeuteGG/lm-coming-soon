import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css';
import './assets/scss/app.scss'
import { JOIN_DISCORD_LINK } from './constants';

const app = createApp(App);

if (window.location.pathname.includes('discord')) {
  window.location.href = JOIN_DISCORD_LINK;
}

app.mount('#app');
