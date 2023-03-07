import { createApp } from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from './router'
import store from './stores/index'
import '@/assets/main.css'
import 'vant/lib/index.css'
import '@/assets/iconfont/font_3929120_ezemag67it8/iconfont.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
