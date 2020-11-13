<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Sign Up</h3>
          <hr class="login-hr" />
          <p class="subtitle has-text-black">Please sign up to proceed.</p>
          <div class="box">
            <form @submit.prevent="signUp">
              <BaseInput
                v-model="user.firstName"
                label="First Name"
                type="text"
              />
              <BaseInput
                v-model="user.lastName"
                label="Last Name"
                type="text"
              />
              <BaseInput v-model="user.email" label="Email" type="email" />
              <BaseInput
                v-model="user.password"
                label="Password"
                type="password"
              />
              <BaseButton
                class="button is-block is-info is-large is-fullwidth"
                type="submit"
              >
                Sign Up
              </BaseButton>
              <p class="has-text-danger" v-if="error">{{ error }}</p>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="/signin">Sign In</router-link> &nbsp;·&nbsp;
            <router-link to="/">Forgot Password</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
import useFirebaseAuth from '@/plugins/firebaseAuth'
export default {
  name: 'SignUp',
  components: { BaseButton, BaseInput },
  setup() {
    const { user, error, signUp } = useFirebaseAuth()

    return { user, error, signUp }
  },
}
</script>

<style scoped></style>
