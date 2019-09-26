<template>
    <div class="input-block">
        <form @submit.prevent="confirmUser()" class="form">
            <label for="code">Введите код подтверждения аккаунта</label>
            <input type="text" placeholder="1234" id="code" minlength="4" maxlength="4" required v-model="userCode">
            <button type="submit" name="confirmUser" class="btn">Подтвердить</button>
            <div class="links-block">
                <router-link :to="{name: 'Code', params: {login: this.$route.params.login}}" target="_blank">Открыть страницу с кодом подтверждения</router-link>
            </div>
        </form>
    </div>
</template>

<style lang="sass">
.form
    width: 100%
    display: flex
    flex-direction: column
    align-items: center

.input-block
    width: 50%
    margin: 65px auto 0 auto
    .form
        input
            width: 40%
            height: 45px
            font-size: 25px
            letter-spacing: 10px
            text-align: center
            border: 2px solid #eceff2
            -webkit-border-radius: 5px
            -moz-border-radius: 5px
            border-radius: 5px
            padding-left: 10px
            padding-right: 0
        label
            margin-bottom: 25px
        .btn
            width: 40%

@media (max-width: 780px)
    .input-block
        width: 100%

</style>

<script>
    import UsersService from '@/services/UsersService'
    export default {
        name: 'Confirm',
        data () {
            return {
                user: {},
                userCode: null
            }
        },
        methods: {
            async getUser() {
                const response = await UsersService.getUser({login: this.$route.params.login})
                this.user = response.data.users[0]
            },
            async confirmUser() {
                if (this.userCode === this.user.code) {
                    await UsersService.successUser({
                        login: this.user.login,
                        activate: true
                    })
                    alert('Аккаунт подтвержден, можно логиниться')
                } else {
                    alert('Неверный код')
                }
            }
        },
        mounted() {
            this.getUser()
        }
    }
</script>
