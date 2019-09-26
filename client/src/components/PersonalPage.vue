<template>
    <div class="container">
        <h2>Список пользователей</h2>
        <ul>
            <li v-for="user in users" :key="user.login">{{ user.name }}</li>
        </ul>
        <router-link :to="{name: 'Auth'}">Вернуться на главную</router-link>
    </div>
</template>

<script>
    import UsersService from '@/services/UsersService'
    export default {
        name: 'Personal',
        data: () => ({
            users: []
        }),
        methods: {
            async getUsers() {
                const response = await UsersService.getUsers()
                this.users = response.data.users
            }
        },
        mounted() {
            this.getUsers()
        }
    }
</script>

