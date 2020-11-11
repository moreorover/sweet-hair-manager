export const userStore = {
  namespaced: true,

  state() {
    return {
      user: null,
      session: null,
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_SESSION(state, session) {
      state.session = session
    },
    SIGNOUT(state) {
      state.user = null
      state.session = null
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    setSession({ commit }, session) {
      commit('SET_SESSION', session)
    },
    signOut({ commit }) {
      commit('SIGNOUT')
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    session(state) {
      return state.session
    },
  },
}
