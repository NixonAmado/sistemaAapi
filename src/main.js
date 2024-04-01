import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue-3'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Install the BootstrapVue components and directives
const app = createApp(App)
app.use(router)
app.use(BootstrapVue)
app.use(IconsPlugin)
app.use(VueAxios, axios)
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('b-')

app.mount('#app')