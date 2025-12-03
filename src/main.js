import { createApp } from 'vue';
import './index.scss';
import { Icon } from '@iconify/vue';
import App from './App.vue';

createApp(App).component('Icon', Icon).mount('#app');
