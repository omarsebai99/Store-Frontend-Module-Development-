import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router configuration

createApp(App)
.use(router) // Use router
.mount('#app');