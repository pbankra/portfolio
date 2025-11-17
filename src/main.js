import { createApp } from 'vue';
import './index.css';
import { Icon } from '@iconify/vue';
import App from './App.vue';

createApp(App).component('Icon', Icon).mount('#app');
