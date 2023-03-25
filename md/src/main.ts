import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import './assets/main.scss'




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
