//high order components
import pageHome from '@/pages/page-home.vue'
import pageNotFound from '@/pages/page-notfound.vue'
import pageForgotPass from '@/pages/page-forgotpass.vue'
import pageChangepassVue from '@/pages/page-changepass.vue'
import pageLoginVue from '@/pages/page-login.vue'
import pageRegisterVue from '@/pages/page-register.vue'

//Types
import type { RouteRecordRaw } from 'vue-router'
import { Roles } from '@/models/routes.models'

//utility for links
export const RoutesNames = {
  login: { name: 'login', path: '/public/login' },
  register: { name: 'register', path: '/public/register' },
  changePass: { name: 'changePass', path: '/public/changePass' },
  forgotPass: { name: 'forgotPass', path: '/public/forgotPass' },
  home: { name: 'home', path: '/private/home', meta: { auth: [Roles.user] } },
  notFound: { name: 'notFound', path: '/404' }
}

//type from RoutesNames
export type RoutesKeys = keyof typeof RoutesNames

//Declarcion de rutas
export const RoutesDeclaration: RouteRecordRaw[] = [
  { ...RoutesNames.login, component: pageLoginVue },
  { ...RoutesNames.register, component: pageRegisterVue },
  { ...RoutesNames.changePass, component: pageChangepassVue },
  { ...RoutesNames.forgotPass, component: pageForgotPass },
  { path: '/', redirect: '/login' },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
  { ...RoutesNames.notFound, component: pageNotFound },
  { ...RoutesNames.home, component: pageHome }
]
