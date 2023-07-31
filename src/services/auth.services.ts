import { users } from '@/mocks/users'
import type { modelUserBasic } from '@/models/users.model'
import { ref, type Ref, computed, type ComputedRef } from 'vue'

type stateFetching = 'inactive' | 'fetching' | 'error' | 'retry' | 'sucess'

export class handleFecthing {
  private userlogged: Ref<modelUserBasic | undefined>
  private state: Ref<stateFetching>
  isLoading: ComputedRef<boolean>
  haveError: ComputedRef<boolean>
  isSuccess: ComputedRef<boolean>
  private callback: (a: any) => Promise<any>
  private params: any

  constructor(callback: (a: any) => Promise<any>, params: any[]) {
    this.userlogged = ref()
    this.state = ref('inactive')
    this.isLoading = computed(() => this.state.value === 'fetching')
    this.haveError = computed(() => this.state.value === 'error')
    this.isSuccess = computed(() => this.state.value === 'sucess')
    this.callback = callback
    this.params = params
  }

  async intentLogin(email: string, password: string) {
    try {
      this.state.value = 'fetching'
      ///this not touch
      const res = this.callback(this.params)
      ///this not touch

      this.state.value = 'sucess'
      this.userlogged.value = await res
    } catch (error) {
      this.userlogged.value = { name: 'error', token: 'asdasd' }
      this.state.value = 'error'
    }
  }

  getUserLogged() {
    return this.userlogged
  }

  getState() {
    return this.state
  }
}

export async function handleEjemplo(params: { email: string; password: string }) {
  return await new Promise<modelUserBasic>((resolve, reject) => {
    const user = users.find(
      (user) => user.password === params.password && user.email === params.email
    )
    setTimeout(() => {
      if (!user) return reject({ msg: 'datos de authentificacion invalidos' })
      else return resolve({ name: user.name, token: user.token })
    }, 3000)
  })
}
