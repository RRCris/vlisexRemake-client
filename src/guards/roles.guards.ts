import { useToken } from '@/pinia/store'
import { routesNames as rm } from '@/routes/paths.routes'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function guardsRoles(to: RouteLocationNormalized, from: any, next: NavigationGuardNext) {
  if (to.matched.some((route) => route.meta.auth)) {
    const token = useToken().token

    if (token === '123456') {
      next()
    } else {
      next({ name: rm.LOGIN })
    }
  } else {
    next()
  }
}
