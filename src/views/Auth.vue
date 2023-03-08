<template>
  <div class="container auth-container">
    <AdvAuthForm />
  </div>
</template>

<script>
import AdvAuthForm from '@/components/AuthForm'
export default {
  name: 'AdvAuth',
  components: {
    AdvAuthForm
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
