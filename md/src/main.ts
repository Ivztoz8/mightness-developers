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
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
import { faUbuntu } from '@fortawesome/free-brands-svg-icons'
import { faSuse} from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'




const app = createApp(App)


/* add icons to the library */
library.add(faHouse)
library.add(faAddressCard)
library.add(faSwatchbook)
library.add(faListCheck)
library.add(faWindowRestore)
library.add(faAddressBook)
library.add(faCircleDollarToSlot)
library.add(faSeedling)
library.add(faLinkedin)
library.add(faVuejs)
library.add(faAngular)
library.add(faNodeJs)
library.add(faLinux)
library.add(faUbuntu)
library.add(faSuse)
library.add(faGit)
library.add(faGithub)
library.add(faBootstrap)
library.add(faServer)
library.add(faKeyboard)
library.add(faNetworkWired)
library.add(faLaptopFile)
library.add(faScrewdriverWrench)



app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')









