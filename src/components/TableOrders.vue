<template>
  <section class="orders">
    <div class="container orders__container">
      <AdvSpinner v-if="orders === null" />
      <h2 v-else-if="orders?.length === 0">нет заказов</h2>
      <table v-else class="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Имя клиента</th>
            <th>Адрес</th>
            <th>
              <button @click="sortedByDate = true">Дата заказа</button>
            </th>
            <th>
              <button @click="sortedByDate = false">Статус</button>
            </th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody>
          <transition-group name="order-list">
            <tr
              v-for="(order, index) in sortedByStatus"
              :key="order.id"
              :class="{compiled: order.status === 'Выполнен'}"
            >
              <th>{{ index + 1 }}</th>
              <th>{{ order.name }}</th>
              <th>{{ order.address }}</th>
              <th>{{ order.date }}</th>
              <th>{{ order.status }}</th>
              <th>{{ order.comment }}</th>
              <div class="orders__buttons" v-if="isAdmin">
                <button
                  v-if="order.status !== 'Выполнен'"
                  @click="updateStatus(order)"
                  class="orders__button"
                  type="button"
                >
                  ok
                </button>
                <button
                  @click="showDialog(order.id)"
                  class="orders__button"
                  type="button"
                >
                  x
                </button>
              </div>
            </tr>
          </transition-group>
          <AdvDialog v-model:show="dialogVisible">
            <AdvDeleteOrder
              :orderId="willDeleteOrderId"
              @cancel="dialogVisible = false"
            />
          </AdvDialog>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
// compareDesc
import {mapActions, mapGetters} from 'vuex'
import {parse, compareAsc} from 'date-fns'
import {ru} from 'date-fns/locale'
import AdvDeleteOrder from '@/components/DeleteOrder'
export default {
  name: 'AdvTableOrders',
  components: {AdvDeleteOrder},
  data() {
    return {
      sortedByDate: true,
      isAdmin: localStorage.getItem('userRole') === 'ADMIN',
      dialogVisible: false,
      willDeleteOrderId: null
    }
  },
  mounted() {
    this.getOrders()
  },
  computed: {
    ...mapGetters('orders', ['orders']),
    sortedByStatus() {
      if (!this.orders) return null
      if (this.sortedByDate) {
        return [...this.orders].sort((order1, order2) => {
          return compareAsc(
            parse(order1.date, 'd MMMM y', new Date(), {locale: ru}),
            parse(order2.date, 'd MMMM y', new Date(), {locale: ru})
          )
        })
      }
      return [...this.orders].sort(order1 =>
        order1.status === 'Новый' ? -1 : 1
      )
    }
  },
  methods: {
    ...mapActions('orders', ['getOrders']),
    updateStatus(order) {
      const newData = {...order}
      newData.status = 'Выполнен'
      this.$store.dispatch('orders/updateStatusOrder', newData)
    },
    deleteOrder() {},
    showDialog(id) {
      this.willDeleteOrderId = id
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.orders {
  flex-grow: 1;
  display: flex;
  align-items: center;

  &__container {
    width: 100%;
  }

  &__buttons {
    display: flex;
    margin-left: 10px;
  }

  &__button {
    border: 1px solid $black;
    padding: 5px;
    &:not(:last-child) {
      margin-right: 6px;
    }
  }
}

.table {
  border-collapse: collapse;
  width: 100%;
  font-weight: 400;
}

th {
  border: 1px solid black;
  padding: 5px 10px;
}

.compiled th {
  opacity: 0.25;
}

.order-list-item {
  display: inline-block;
  margin-right: 10px;
}
.order-list-enter-active,
.order-list-leave-active {
  transition: all 0.41s ease;
}
.order-list-enter-from,
.order-list-leave-to {
  opacity: 0;
  transform: translateX(140px);
}
.order-list-move {
  transition: transform 0.4s ease;
}
</style>
