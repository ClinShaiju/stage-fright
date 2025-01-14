import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
Vue.use(VueGtag, {
    config: { id: "G-SEB3KY3RB7" }
  });

app.mount('#app')
