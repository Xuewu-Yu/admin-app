import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from 'vue-router';
import routes from './router';

const router = createRouter({routes});

createApp(App)
  .use(router)
  .mount('#app');
