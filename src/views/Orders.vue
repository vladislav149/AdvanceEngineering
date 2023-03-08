<template>
  <AdvHeader />
  <AdvTableOrders />
</template>

<script>
import AdvHeader from '@/components/Header'
import AdvTableOrders from '@/components/TableOrders'
export default {
  name: 'AdvOrders',
  components: {
    AdvHeader,
    AdvTableOrders
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
