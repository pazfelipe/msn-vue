import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/_variables.scss'
import './assets/css/main.scss'

createApp(App).use(store).use(router).mount('#app')
