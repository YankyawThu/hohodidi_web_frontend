import './assets/main.scss'
import './style.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import store from '@/store'
import axios from 'axios'

const user = JSON.parse(localStorage.getItem('user'))

axios.defaults.baseURL = import.meta.env.VITE_API_URL
if(user && user.token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
}
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.get['Accept'] = 'application/json'

library.add(fab, fas, far)

const app = createApp(App)

app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
