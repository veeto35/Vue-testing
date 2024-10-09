import './assets/main.css';
import  Toast  from 'vue-toastification';
import 'vue-toastification/dist/index.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'


const app = createApp(App);

app.use(Router)
app.use(Toast)

app.mount('#app');


