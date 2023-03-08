<template>
  <form @submit.prevent="auth" class="auth-form" action="">
    <div class="auth-form__container">
      <AdvInput
        v-model="user.login"
        :isError="errorAuth"
        @focus="errorAuth = false"
        class="auth-form__input"
        placeholder="username"
        required
        autofocus
      />
      <AdvInput
        v-model="user.password"
        :isError="errorAuth"
        @focus="errorAuth = false"
        class="auth-form__input"
        type="password"
        placeholder="password"
        required
      />
      <div v-if="errorAuth" class="auth-form__error">
        {{ errMessage }}
      </div>
    </div>
    <AdvButton :disabled="!isValid" class="auth-form__button" type="submit"
      >Войти</AdvButton
    >
  </form>
</template>

<script>
export default {
  name: 'AdvAuthForm',
  data() {
    return {
      user: {
        login: '',
        password: ''
      },
      errorAuth: false,
      disableButton: false,
      errMessage: ''
    }
  },
  computed: {
    isValid() {
      return this.user.password.length > 7 && !this.disableButton
    }
  },
  methods: {
    auth() {
      this.disableButton = true
      this.$store
        .dispatch('auth/login', {
          user: this.user.login,
          password: this.user.password
        })
        .then(() => {
          this.disableButton = false
          this.$router.push({name: 'orders'})
        })
        .catch(err => {
          this.errMessage = err.response.data.message
          this.disableButton = false
          this.errorAuth = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  background-color: $background-second;
  min-width: 344px;
  padding: 59px 15px 22px 38px;

  &__container {
    display: flex;
    flex-direction: column;
    margin-bottom: 7px;
  }

  &__input {
    margin-bottom: 32px;
    max-width: 180px;
    width: 100%;
  }

  &__error {
    color: $red;
  }

  &__button {
    display: block;
    margin: 0 auto;
    min-width: 104px;
  }
}
</style>
