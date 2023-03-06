import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import audios from './assets/sounds'

const app = createApp(App)

app.config.globalProperties.$audios = audios

app.mount('#app')
