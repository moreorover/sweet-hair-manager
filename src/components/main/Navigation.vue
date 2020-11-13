<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item brand-text" :to="{ name: 'Home' }">
          Sweet Hair
        </router-link>
        <div
          class="navbar-burger burger"
          data-target="navMenu"
          onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'Home' }">
            Home
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'Dashboard' }">
            Dashboard
          </router-link>
          <router-link class="navbar-item" to="/">
            Payments
          </router-link>
          <router-link class="navbar-item" to="/">
            Exceptions
          </router-link>
          <router-link class="navbar-item" to="/">
            Reports
          </router-link>
        </div>
        <div class="navbar-end" v-if="user">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <router-link class="button is-small" to="/profile">
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span> {{ user.firstName }} {{ user.lastName }} </span>
                </router-link>
              </p>
              <p class="control">
                <button @click="signOut" class="button is-small">
                  <span>
                    Sign Out
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
        <div class="navbar-end" v-else>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <router-link class="button is-small" :to="{ name: 'Sign Up' }">
                  <span class="icon">
                    <i class="fa fa-user-plus"></i>
                  </span>
                  <span>
                    Register
                  </span>
                </router-link>
              </p>
              <p class="control">
                <router-link
                  class="button is-small is-info is-outlined"
                  :to="{ name: 'Sign In' }"
                >
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>Login</span>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import useFirebaseAuth from '@/plugins/firebaseAuth'

export default {
  name: 'Navigation',
  setup() {
    const store = useStore()
    const { signOut } = useFirebaseAuth()

    let user = computed(() => store.state.user.user)

    let show = computed(() => user.value !== null)

    return {
      show,
      user,
      signOut,
    }
  },
}
</script>

<style scoped></style>
