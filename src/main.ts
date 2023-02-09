import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router'
import 'ant-design-vue/dist/antd.css'
import pinia from '@/stores/index'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
