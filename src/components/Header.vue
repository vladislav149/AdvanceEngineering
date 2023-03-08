<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link
            :to="{name: 'orders'}"
            active-class="active"
            class="nav__link"
            >Все заказы</router-link
          >
        </li>
        <li class="nav__item">
          <router-link
            :to="{name: 'order'}"
            active-class="active"
            exact
            class="nav__link"
            >Добавить заказ</router-link
          >
        </li>
      </ul>
      <div class="nav__username">{{ user.name }}</div>
      <AdvButton @click="logout" class="nav__logout" type="button"
        >Выйти</AdvButton
      >
    </nav>
  </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'AdvHeader',
  data() {
    return {}
  },
  mounted() {
    this.updateUser()
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['updateUser']),
    logout() {
      this.$store
        .dispatch('auth/logout')
        .then(() => this.$router.push({name: 'auth'}))
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $blue-main;
  padding: 19px 15px 18px 22px;
}

.nav {
  display: flex;
  align-items: center;

  &__list {
    display: flex;
    margin-right: auto;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 38px;
    }
  }

  &__link {
    padding: 15px 0;
    color: $white;
  }

  &__username {
    margin-right: 28px;
  }

  &__logout {
    background-color: $background-second;
  }
}

.active {
  color: $black;
}
</style>
