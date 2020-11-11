import { createStore } from 'vuex'
import { userStore } from '@/store/userStore'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: userStore,
  },
})
