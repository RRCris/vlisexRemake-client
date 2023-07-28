import { createApp } from 'vue'
import App from './App.vue'
import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import pageLogin from '@/pages/page-login.vue'
import pageRegister from '@/pages/page-register.vue'
import pageForgotPass from '@/pages/page-forgotpass.vue'
import pageChangePass from '@/pages/page-changepass.vue'
import pageNotFound from '@/pages/page-notfound.vue'
import pageHome from '@/pages/page-home.vue'

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

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requireAuth)) {
    setTimeout(() => next(), 2000)
  } else {
    next()
  }
})
const app = createApp(App)
app.use(router)
app.mount('#app')
