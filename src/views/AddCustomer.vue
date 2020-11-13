<template>
  <div class="card has-text-centered">
    <div class="column">
      <h3 class="title has-text-black">Create Customer</h3>
      <form @submit.prevent="saveCustomer">
        <BaseInput v-model="firstName" label="First Name" type="text" />
        <BaseInput v-model="lastName" label="Last Name" type="text" />
        <BaseButton
          class="button is-block is-info is-large is-fullwidth"
          type="submit"
        >
          Save
        </BaseButton>
        <p class="has-text-danger" v-if="error">{{ error }}</p>
      </form>
    </div>
  </div>
  {{ firstName }}
  {{ lastName }}
</template>

<script>
import useCustomer from '@/features/useCustomer'
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'

export default {
  name: 'AddCustomer',
  components: {
    BaseInput,
    BaseButton,
  },
  setup() {
    const { firstName, lastName, error, saveCustomer } = useCustomer()

    return { firstName, lastName, error, saveCustomer }
  },
}
</script>

<style scoped></style>
