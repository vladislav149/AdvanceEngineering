<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :isError="isError"
    :class="{error: isError}"
    @input="updateInput"
  />
</template>

<script>
export default {
  name: 'AdvInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: [String, Number],
      required: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 9px 17px;
  background-color: $white;
}

.error {
  border: 2px solid $red;
}
</style>
