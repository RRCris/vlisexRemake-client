import { users } from '@/mocks/users'
import type { modelUserBasic } from '@/models/users.model'

export async function authDefault(params: { email: string; password: string }) {
  return new Promise<modelUserBasic>((resolve, reject) => {
    const user = users.find(
      (user) => user.password === params.password && user.email === params.email
    )
    setTimeout(() => {
      if (!user) return reject({ msg: 'datos de authentificacion invalidos' })
      else return resolve({ name: user.name, token: user.token })
    }, 3000)
  })
}
