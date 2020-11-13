import { ref } from 'vue'
import supabase from '@/plugins/supabase'
import router from '@/router'

export default function useCustomer(id, firstName, lastName) {
  const customerId = id
  const fName = ref(firstName)
  const lName = ref(lastName)
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
          firstName: fName.value,
          lastName: lName.value,
        },
      ])
      .then(res => {
        if (res.data) {
          router.push({ name: 'Customers' })
        }
      })
  }

  function updateCustomer() {
    supabase
      .from('customers')
      .update({ firstName: firstName, lastName: lastName })
      .match({ id: customerId })
      .then(res => {
        console.log(res)
        if (res.data) {
          router.push({ name: 'Customers' })
        }
      })
  }

  function onFormSubmit() {
    if (id) {
      console.log('update')
      updateCustomer()
    } else {
      console.log('save')
      saveCustomer()
    }
  }

  return {
    firstName: fName,
    lastName: lName,
    error,
    customers,
    fetchCustomers,
    onFormSubmit,
  }
}
