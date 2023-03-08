<template>
  <AdvHeader />
  <AdvOrderForm />
</template>

<script>
import AdvHeader from '@/components/Header'
import AdvOrderForm from '@/components/OrderForm'
export default {
  name: 'AdsAddOrder',
  components: {
    AdvHeader,
    AdvOrderForm
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
