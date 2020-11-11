<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link> |-->
  <!--    <router-link to="/dashboard">Dashboard</router-link>-->
  <!--  </div>-->
  <nav class="navbar is-white">
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
                  <span>
                    {{ user.email }}
                  </span>
                </router-link>
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
  <router-view />
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.getters['user/user']
    },
  },
}
</script>
<style></style>
