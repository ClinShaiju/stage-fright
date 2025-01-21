import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import VueCookies from 'vue-cookies';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueCookies);
app.mount('#app')
