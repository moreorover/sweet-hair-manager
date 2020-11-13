<template>
  <section class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Hello, {{ user.email }}.</h1>
        <h2 class="subtitle">
          I hope you are having a great day!
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Profile',
  setup() {
    const store = useStore()

    return {
      user: computed(() => store.state.user.user),
    }
  },
}
</script>

<style scoped></style>
