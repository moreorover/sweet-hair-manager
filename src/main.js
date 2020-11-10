import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import supabase from '@/plugins/supabase'

createApp(App)
  .use(supabase)
  .use(store)
  .use(router)
  .mount('#app')
