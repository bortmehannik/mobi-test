<template>
    <div class="registration">
        <h2>Зарегистрируйте новый аккаунт</h2>
        <form @submit.prevent="signUp()">
            <label for="name">ФИО</label>
            <input type="text" id="name" placeholder="Введите ФИО" v-model.trim="user.name" required>
            <label for="email">Логин</label>
            <input type="email" id="email" placeholder="Введите email" v-model.trim="user.login" required>
            <label for="password">Пароль</label>
            <input type="password" id="password" placeholder="Введите пароль" v-model.trim="user.password" required>
            <label for="phone">Телефон</label>
            <input type="text" id="phone" placeholder="Введите телефон" v-model.trim="user.phone" required>
            <label for="country">Страна</label>
            <input type="text" id="country" placeholder="Введите страну" v-model.trim="user.country" required>
            <label for="city">Город</label>
            <input type="text" id="city" placeholder="Введите город" v-model.trim="user.city" required>
            <label for="os">ОС мобильного телефона</label>
            <select name="os" id="os" v-model.trim="user.operationSystem" required>
                <option value="Android">Android</option>
                <option value="iOS" selected>iOS</option>
            </select>
            <button type="submit" name="signUp" class="btn">Зарегистрироваться</button>
        </form>
        <div class="links-block">
            <a href="#">Я забыл пароль</a>
            <router-link :to="{name: 'Auth'}">Авторизация</router-link>
        </div>
    </div>
</template>

<script>
    import UsersService from '@/services/UsersService'
    export default {
        name: 'Registration',
        data () {
            return {
                user: {
                    name: null,
                    login: null,
                    password: null,
                    phone: null,
                    country: null,
                    city: null,
                    operationSystem: null,
                    code: null,
                    activate: false
                }
            }
        },
        methods: {
            async signUp() {
                await UsersService.addUser({
                    name: this.user.name,
                    login: this.user.login,
                    password: this.user.password,
                    phone: this.user.phone,
                    country: this.user.country,
                    city: this.user.city,
                    operationSystem: this.user.operationSystem,
                    code: this.getRandomInt(1000, 9999),
                    activate: this.user.activate
                })
                this.$router.push({name: 'Confirm', params: {login: this.user.login}})
            },
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
