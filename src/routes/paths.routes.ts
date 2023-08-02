//high order components
import pageHome from '@/pages/page-home.vue'
import pageNotFound from '@/pages/page-notfound.vue'
import pageForgotPass from '@/pages/page-forgotpass.vue'
import pageChangepassVue from '@/pages/page-changepass.vue'
import pageLoginVue from '@/pages/page-login.vue'
import pageRegisterVue from '@/pages/page-register.vue'
import navbarLayout from '@/pages/layout/navbarLayout.vue'

//Types
import type { RouteRecordRaw } from 'vue-router'

export enum routesNames {
  LOGIN = 'AuthLogin',
  NOTFOUND = 'NotFound',
  REGISTER = 'AuthRegister',
  FORGOTPASS = 'ForgotPass',
  CHANGEPASS = 'ChangePass',
  MAINHOME = 'MainHome'
}

export const Routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: navbarLayout,
    children: [
      { path: 'login', component: pageLoginVue, name: routesNames.LOGIN },
      { path: 'register', component: pageRegisterVue, name: routesNames.REGISTER },
      { path: 'forgotpassword', component: pageForgotPass, name: routesNames.FORGOTPASS },
      { path: 'changepassword/:token', component: pageChangepassVue, name: routesNames.CHANGEPASS }
    ]
  },
  {
    path: '/ecommers',
    children: [
      { path: 'home', component: pageHome, name: routesNames.MAINHOME, meta: { auth: true } }
    ]
  },
  {
    path: '/',
    redirect: () => ({ name: routesNames.LOGIN })
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => ({
      name: routesNames.NOTFOUND
    })
  },
  {
    path: '/404',
    component: pageNotFound,
    name: routesNames.NOTFOUND
  }
]
