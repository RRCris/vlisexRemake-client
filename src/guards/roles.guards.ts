import { useToken } from '@/pinia/store'
import { RoutesNames } from '@/routes/paths.routes'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function guardsRoles(to: RouteLocationNormalized, from: any, next: NavigationGuardNext) {
  if (to.matched.some((route) => route.meta.auth)) {
    const token = useToken().token

    if (token === '123456') {
      next()
    } else {
      next(RoutesNames.login.path)
    }
  } else {
    next()
  }
}
