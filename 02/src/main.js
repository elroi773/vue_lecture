import { createApp } from 'vue'
import App from './App.vue'
import FirstChild  from "./componets/FirstChild.vue";
const app = (App);
app.componet("FirstChild",FirstChild);
app.mount('#app')
