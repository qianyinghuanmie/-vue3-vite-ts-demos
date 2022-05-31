import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store/index'
import backPlugin from './plugin/back.vue'

import App from './App.vue'
const app = createApp(App)

app.component('button-counter',backPlugin)

app.use(store).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
console.log(app);
