<template>
  <div class="field">
    <label class="label" :for="label" v-if="label">{{ label }}</label>
    <div class="control">
      <textarea
        v-bind="$attrs"
        :id="label"
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        class="textarea"
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
      type: String,
      default: '',
    },
  },
}
</script>
