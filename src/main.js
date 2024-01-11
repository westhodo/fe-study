import { createApp } from 'vue'
import App from './App.vue'
import { router } from './route/index.js'
import "./assets/scss/common.scss";

const app = createApp(App)
app.use(router)
app.mount('#app')
