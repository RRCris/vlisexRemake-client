import { createApp } from 'vue'
import App from './App.vue'
import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { useToken } from '@/pinia/store'
//componentes
import pageLogin from '@/pages/page-login.vue'
import pageRegister from '@/pages/page-register.vue'
import pageForgotPass from '@/pages/page-forgotpass.vue'
import pageChangePass from '@/pages/page-changepass.vue'
import pageNotFound from '@/pages/page-notfound.vue'
import pageHome from '@/pages/page-home.vue'

//Declaracion de APP
const app = createApp(App)

//Declarcion de rutas
const routes: RouteRecordRaw[] = [
  { path: '/login', component: pageLogin },
  { path: '/register', component: pageRegister },
  { path: '/changepass/:token', component: pageChangePass },
  { path: '/forgotpass', component: pageForgotPass },
  { path: '/', redirect: '/login' },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
  { path: '/404', component: pageNotFound },
  { path: '/home', component: pageHome, meta: { requireAuth: true } }
]

//creacion de enrutado
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

//activePinia
const pinia = createPinia()
app.use(pinia)

//AuthGuards
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requireAuth)) {
    const token = useToken().token
    console.log('authGuards', token)
    if (token === '123456') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

//vinculacion de la app con el enrutado y storeGlobal
app.use(router)
app.mount('#app')
