import { defineStore } from 'pinia'

interface modelStore {
  token: null | string
}
const INIT_STORE: modelStore = { token: null }

export const useToken = defineStore('tokenManager', {
  state: () => INIT_STORE,
  actions: {
    clearToken() {
      this.token = null
    },
    addToken(newToken: string) {
      this.token = newToken
    }
  }
})
