<template>
  <div class="loading">
    <slot>Загрузка...</slot>
  </div>
</template>

<script>
export default {
  name: 'AdvSpinner',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.loading {
  font-size: 20px;
}
</style>
