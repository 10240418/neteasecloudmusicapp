import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import getVant from "@/plugins/index.js";
import App from './App.vue'
import router from './router'

const app = createApp(App)
getVant(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
