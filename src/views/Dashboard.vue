<template>
  <h1>Very secret dashboard page</h1>
  <button @click="signOut">Sign Out</button>
</template>

<script>
import useSupabaseAuth from '@/plugins/supabaseAuth'

export default {
  name: 'Dashboard',
  setup() {
    const { signOut } = useSupabaseAuth()

    return { signOut }
  },
}
</script>

<style scoped></style>
