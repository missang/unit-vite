import { defineStore } from 'pinia'
import storage from '@/utils/storage'
export const useStore = defineStore({
  id: 'user',
  state: () => ({
    token: storage.get('token') || '',
    specList: storage.get('specList') || [],
  }),
  getters: {

  },
  actions: {
    setToken(val:any) {
      storage.set('token', val)
      this.token = val
    },
    setSpecList(val:any) {
      storage.set('specList', val)
      this.specList = val
    },

    logout() {
      this.token = ''
      storage.remove('token')
    },
  },
})
