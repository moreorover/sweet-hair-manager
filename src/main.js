import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import supabase from '@/plugins/supabase'

supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT' && session === null) {
    router.push({ name: 'Home' })
  }
})

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
