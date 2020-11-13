import { db } from '@/plugins/firebase'
import router from '@/router'

export const userStore = {
  namespaced: true,

  state() {
    return {
      user: null,
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    async fetchUserProfile({ commit }, user) {
      const userProfile = await db
        .collection('users')
        .doc(user.uid)
        .get()

      commit('SET_USER', userProfile.data())
      router.replace({ name: 'Dashboard' })
    },
  },
  getters: {
    user(state) {
      return state.user
    },
  },
}
