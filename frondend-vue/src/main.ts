import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');