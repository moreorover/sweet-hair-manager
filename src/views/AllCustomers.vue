<template>
  <div class="card">
    <table class="table is-fullwidth is-striped">
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <!--              <td width="5%"><i class="fa fa-bell-o"></i></td>-->
          <td>{{ customer.firstName }} {{ customer.lastName }}</td>
          <td class="level-right">
            <div class="buttons">
              <router-link to="/customers" class="button is-small is-primary"
                >View</router-link
              >
              <router-link to="/customers" class="button is-small is-danger"
                >Delete</router-link
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--    <footer class="card-footer">-->
  <!--      <a href="#" class="card-footer-item">View All</a>-->
  <!--    </footer>-->
</template>

<script>
import useCustomer from '@/features/useCustomer'

export default {
  name: 'AllCustomers',
  setup() {
    const { customers, fetchCustomers } = useCustomer()
    fetchCustomers()
    return { customers, fetchCustomers }
  },
}
</script>

<style scoped></style>
