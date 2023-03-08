<template>
  <div class="delete">
    <h3 class="delete__title">Вы действительно хотите удалить заказ?</h3>
    <div class="delete__buttons">
      <AdvButton @click="deleteOrder" class="delete__button">Ок</AdvButton>
      <AdvButton @click="cancel" class="delete__button">Отмена</AdvButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvDeleteOrder',
  props: {
    orderId: {
      type: Number,
      required: true
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    deleteOrder() {
      this.$store
        .dispatch('orders/deleteOrder', this.orderId)
        .then(() => this.cancel())
    }
  }
}
</script>

<style lang="scss" scoped>
.delete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    margin-bottom: 68px;
  }

  &__button {
    &:not(:last-child) {
      margin-right: 55px;
    }
  }
}
</style>
