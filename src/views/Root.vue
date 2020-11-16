<template>
  <Navigation />
  <div class="container ">
    <div class="columns">
      <div class="column is-3">
        <SideNavigation />
      </div>
      <div class="column is-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavigation from '@/components/main/SideNavigation'
import Navigation from '@/components/main/Navigation'

export default {
  name: 'Root',
  components: { SideNavigation, Navigation },
}
</script>

<style scoped></style>
