<template>
  <section class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Customers</h1>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li>
              <router-link :to="{ name: 'Add Customer' }"
                >Add Customer</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  <router-view />
</template>

<script>
export default {
  name: 'Customers',
}
</script>

<style scoped></style>
