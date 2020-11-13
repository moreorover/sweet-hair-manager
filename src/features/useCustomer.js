import { ref } from 'vue'
import supabase from '@/plugins/supabase'
import router from '@/router'

export default function useCustomer() {
  const firstName = ref('')
  const lastName = ref('')
  const error = ref('')

  const customers = ref([])

  function fetchCustomers() {
    supabase
      .from('customers')
      .select()
      .then(res => (customers.value = res.data))
  }

  function saveCustomer() {
    supabase
      .from('customers')
      .insert([
        {
          firstName: firstName.value,
          lastName: lastName.value,
        },
      ])
      .then(res => {
        if (res.data) {
          router.push({ name: 'Customers' })
        }
      })
  }

  return {
    firstName,
    lastName,
    error,
    customers,
    saveCustomer,
    fetchCustomers,
  }
}
