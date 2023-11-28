import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.less'

createApp(App).use(router).mount('#app')
