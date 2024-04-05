import './assets/main.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas)

const vuetify = createVuetify({})
const app = createApp(App);


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.use(createPinia())
app.use(router)
//app.use(images)

app.mount('#app')
