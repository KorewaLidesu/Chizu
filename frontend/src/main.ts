// Assets
import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vue3-openlayers/styles.css'

// Main components
import { createApp } from 'vue'

// Plugins
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import OpenLayersMap from 'vue3-openlayers'

// Routers
import App from './App.vue'
import router from './router'

// Initialize
const app = createApp(App)

const vuetify = createVuetify()

app.use(createPinia())
app.use(vuetify)
app.use(OpenLayersMap)

app.use(router)

app.mount('#app')
