<template>
  <div class="field">
    <div class="control">
      <input
        v-bind="$attrs"
        class="input is-large"
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number, Date],
      default: '',
    },
  },
}
</script>
