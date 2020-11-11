import supabase from '@/plugins/supabase'
import router from '@/router'

export const userStore = {
  namespaced: true,

  state() {
    return {
      user: null,
      error: null,
    }
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    CLEAR_ERROR(state) {
      state.error = null
    },
  },
  actions: {
    async signup({ commit }, userDetails) {
      await supabase.auth
        .signUp(userDetails)
        .then(data => commit('SET_USER', data.user))
        .catch(error => {
          commit('SET_ERROR', error)
          throw error
        })
    },
    async signin({ commit }, userDetails) {
      await supabase.auth
        .signIn(userDetails)
        .then(data => commit('SET_USER', data.user))
        .catch(error => commit('SET_ERROR', error))
    },
    signout({ commit }) {
      supabase.auth
        .signOut()
        .then(() => commit('CLEAR_USER'))
        .then(() => {
          router.replace({ name: 'Home' })
        })
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    error(state) {
      return state.error
    },
  },
}
