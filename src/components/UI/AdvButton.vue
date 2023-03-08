<template>
  <button :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AdvButton',
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'button'
    }
    // disabled: {
    //   type: Boolean,
    //   default: false
    // }
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 7px 19px;
  min-width: 78px;
  background-color: $white;
}
</style>
