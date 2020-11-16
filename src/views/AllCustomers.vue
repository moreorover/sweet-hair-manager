<template>
  <div class="card">
    <!--    <table class="table is-fullwidth is-striped">-->
    <!--      <tbody>-->
    <!--        <tr v-for="customer in customers" :key="customer.id">-->
    <!--          <td class="has-text-weight-bold">-->
    <!--            {{ customer.firstName }} {{ customer.lastName }}-->
    <!--          </td>-->
    <!--          <td class="level-right">-->
    <!--            <div class="buttons">-->
    <!--              <router-link to="/customers" class="button is-small is-primary"-->
    <!--                >View</router-link-->
    <!--              >-->
    <!--              <router-link-->
    <!--                :to="{-->
    <!--                  name: 'Edit Customer',-->
    <!--                  params: {-->
    <!--                    id: customer.id,-->
    <!--                    fName: customer.firstName,-->
    <!--                    lName: customer.lastName,-->
    <!--                  },-->
    <!--                }"-->
    <!--                class="button is-small is-primary"-->
    <!--                >Edit</router-link-->
    <!--              >-->
    <!--              <router-link to="/customers" class="button is-small is-danger"-->
    <!--                >Delete</router-link-->
    <!--              >-->
    <!--            </div>-->
    <!--          </td>-->
    <!--        </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->
  </div>
</template>

<script>
export default {
  name: 'AllCustomers',
  setup() {},
}
</script>

<style scoped></style>
