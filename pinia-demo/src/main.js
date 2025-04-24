// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia' // pinia 임포트

const app = createApp(App)

const pinia = createPinia() // pinia 인스턴스 생성
app.use(pinia)              // pinia 등록
app.use(router)

app.mount('#app')
