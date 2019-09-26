<template>
  <div class="auth">
    <h2>Войдите в свой профиль</h2>
    <form @submit.prevent="signIn()">
      <label for="email">Логин</label>
      <input type="email" id="email" placeholder="Введите логин" v-model="login">
      <label for="password">Пароль</label>
      <input type="password" id="password" placeholder="Введите пароль" autocomplete="cc-csc" v-model="password">
      <button type="submit" name="signIn" class="btn">Войти</button>
    </form>
    <div class="links-block">
      <a href="#">Я забыл пароль</a>
      <router-link :to="{name: 'Registration'}">Регистрация</router-link>
    </div>
  </div>
</template>

<script>
  import UsersService from '@/services/UsersService'
  export default {
    name: 'Authentication',
    data: () => ({
      user: {},
      login: null,
      password: null
    }),
    methods: {
      async signIn() {
        const response = await UsersService.getUser({login: this.login})
        this.user = response.data.users[0]
        console.log(this.password)
        if (this.user !== undefined) {
          if (this.password === this.user.password) {
            this.$router.push({name: 'Personal', params: {id: this.user._id}})
          } else {
            alert('Пароль введен неверно')
          }
        } else {
          alert('Такого пользователя не существует')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
