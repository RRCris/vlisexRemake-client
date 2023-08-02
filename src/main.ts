import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import { guardsRoles } from './guards/roles.guards'
import { Routes } from './routes/paths.routes'

//Declaracion de APP
const app = createApp(App)

//activePinia
const pinia = createPinia()
app.use(pinia)

//creacion de enrutado
const router = createRouter({
  history: createWebHashHistory(),
  routes: Routes
})

//AuthGuards
router.beforeEach(guardsRoles)

//vinculacion de la app con el enrutado y storeGlobal
app.use(router)
app.mount('#app')
