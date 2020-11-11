import supabase from '@/plugins/supabase'
import router from '@/router'
import { ref } from 'vue'

export default function useSupabaseAuth() {
  const email = ref('')
  const password = ref('')
  const error = ref('')

  function signUp() {
    supabase.auth
      .signUp({ email: email.value, password: password.value })
      .then(response => {
        if (!response.data && !response.user && response.error) {
          error.value = response.error.message
        }
        if (response.data && response.user && !response.error) {
          router.replace({ name: 'Dashboard' })
        }
      })
  }

  function signIn() {
    supabase.auth
      .signIn({ email: email.value, password: password.value })
      .then(response => {
        if (!response.data && !response.user && response.error) {
          error.value = response.error.message
        }
        if (response.data && response.user && !response.error) {
          router.replace({ name: 'Dashboard' })
        }
      })
  }

  function signOut() {
    supabase.auth.signOut()
  }

  function resetPasswordForEmail() {
    supabase.auth.api.resetPasswordForEmail(email)
  }

  return {
    email,
    password,
    error,
    signUp,
    signIn,
    signOut,
    resetPasswordForEmail,
  }
}
