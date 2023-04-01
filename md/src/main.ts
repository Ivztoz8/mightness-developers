import { createApp } from 'vue'
import { createPinia } from 'pinia'




import App from './App.vue'
import router from './router'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import './assets/main.scss'

// Import Bootstrap and BootstrapVue CSS files (order is important)
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'


const app = createApp(App)


/* add icons to the library */
library.add(faHouse)
library.add(faAddressCard)
library.add(faSwatchbook)
library.add(faListCheck)
library.add(faWindowRestore)
library.add(faAddressBook)
library.add(faCircleDollarToSlot)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')







