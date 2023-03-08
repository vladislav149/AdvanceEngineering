<template>
  <section class="order-add">
    <div class="container">
      <h2 class="order-add__title">Добавить заказ</h2>
      <form @submit.prevent="createOrder" class="order-form" action="">
        <AdvInput
          v-model="orderName"
          class="order-form__input"
          placeholder="Введите ваше имя"
          required
        />
        <AdvInput
          v-model="order.address"
          class="order-form__input"
          placeholder="Введите ваш адрес"
          required
        />
        <AdvInput
          v-model="order.comment"
          class="order-form__input"
          placeholder="Комментарий"
        />
        <AdvButton :disabled="!isValid" class="order-form__button" type="submit"
          >Добавить заказ</AdvButton
        >
        {{ order.userName }}
      </form>
    </div>
  </section>
</template>

<script>
import ordersApi from '@/api/ordersApi'
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'
export default {
  name: 'AdsOrderForm',
  data() {
    return {
      order: {
        userName: '',
        address: '',
        comment: ''
      }
    }
  },
  computed: {
    orderName: {
      get() {
        return this.$store.getters['user/user'].name || 'Загрузка...'
      },
      set(newValue) {
        this.order.userName = newValue
      }
    },
    isValid() {
      return (
        (this.order.userName || this.$store.getters['user/user'].name) &&
        this.order.address
      )
    }
  },
  methods: {
    createOrder() {
      const data = {
        name: this.order.userName || this.$store.getters['user/user'].name,
        address: this.order.address,
        date: format(new Date(), 'd MMMM y', {locale: ru}),
        status: 'Новый',
        comment: this.order.comment
      }
      ordersApi.newOrder(data).then(() => this.$router.push({name: 'orders'}))
    }
  }
}
</script>

<style lang="scss" scoped>
.order-add {
  padding-top: 31px;

  &__title {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 33px;
  }
}
.order-form {
  display: flex;
  flex-direction: column;

  &__input {
    max-width: 162px;
    margin-bottom: 24px;
  }

  &__button {
    width: fit-content;
  }
}
</style>
