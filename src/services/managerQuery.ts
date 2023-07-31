import type { modelUserBasic } from '@/models/users.model'
import { ref, type Ref, computed, type ComputedRef } from 'vue'

type stateFetching = 'inactive' | 'fetching' | 'error' | 'retry' | 'sucess'

export class ManagerQuery {
  private userlogged: Ref<modelUserBasic | undefined>
  private state: Ref<stateFetching>
  isLoading: ComputedRef<boolean>
  haveError: ComputedRef<boolean>
  isSuccess: ComputedRef<boolean>
  private callback: (a: any) => Promise<any>

  constructor(callback: (a: any) => Promise<any>) {
    this.userlogged = ref()
    this.state = ref('inactive')
    this.isLoading = computed(() => this.state.value === 'fetching')
    this.haveError = computed(() => this.state.value === 'error')
    this.isSuccess = computed(() => this.state.value === 'sucess')
    this.callback = callback
  }

  async execute(params: any) {
    try {
      this.state.value = 'fetching'
      ///this not touch
      const res = await this.callback(params)
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
