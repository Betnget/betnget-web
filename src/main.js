import './assets/main.css'

import { createApp } from 'vue'
import { router } from './plugins/vue-router'
import App from './App.vue'

createApp(App)
.use(router) // VueRouter
.mount('#app')
