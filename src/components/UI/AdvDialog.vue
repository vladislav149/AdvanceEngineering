<template>
  <div v-if="show" class="dialog" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show')
    }
  }
}
</script>

<style scoped>
.dialog {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  padding: 20px;
  background-color: #e2e1e1;
  min-height: 215px;
  min-width: 335px;
}
</style>
