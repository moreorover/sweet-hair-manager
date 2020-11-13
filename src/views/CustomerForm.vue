<template>
  <div class="card has-text-centered">
    <div class="column">
      <h3 class="title has-text-black">Create Customer</h3>
      <form @submit.prevent="onFormSubmit">
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
  ID: {{ id }}
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
  props: {
    id: {
      type: String,
      required: false,
      default() {
        return null
      },
    },
    fName: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
    lName: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },
  setup(props) {
    const { firstName, lastName, error, onFormSubmit } = useCustomer(
      props.id,
      props.fName,
      props.lName
    )
    console.log(props)

    return { firstName, lastName, error, onFormSubmit }
  },
}
</script>

<style scoped></style>
