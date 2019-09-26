<template>
    <div class="code">
        <p>{{ user.code }}</p>
        <div class="code__timer">
            <p id="timer">{{ time.minutes }}:{{time.seconds}}</p>
        </div>
    </div>
</template>

<style lang="sass">
.code
    > p
        text-align: center
        font-size: 60px
        color: #b266fe
        font-weight: 900
    &__timer
        text-align: center
        font-size: 25px


</style>

<script>
    import UsersService from '@/services/UsersService'
    export default {
        name: 'Code',
        data: () => ({
            time: {
               minutes: null,
               seconds: null
            },
            user: {}
        }),
        methods: {
            startTimer(duration, display) {
                let time = duration;
                const timer = setInterval(() => {
                    --time;
                    let minutes = parseInt(time / 60, 10)
                    let seconds = parseInt(time % 60, 10)
                    this.time.minutes = minutes < 10 ? "0" + minutes : minutes
                    this.time.seconds = seconds < 10 ? "0" + seconds : seconds
                }, 1000)
                setTimeout(() => {
                    clearInterval(timer)
                    this.getUser(this.user.login)
                    if (this.user.activate) {
                        console.log('Ваш аккаунт подтвержден')
                        close()
                    } else {
                        this.deleteUser(this.user.login)
                        this.$router.push({name: 'Registration'})
                        console.log('Не подтвержден')
                    }
                }, duration * 1000)
            },
            async getUser(login) {
                const response = await UsersService.getUser({login: login})
                this.user = response.data.users[0]
            },
            async deleteUser(login) {
                await UsersService.deleteUser(login)
            }
        },
        mounted() {
            this.startTimer(300, document.querySelector('#timer'))
            this.getUser(this.$route.params.login)
        }
    }
</script>
