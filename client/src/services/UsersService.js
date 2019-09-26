import api from '@/services/api'
export default {
    addUser (params) {
        return api().post('users', params)
    },
    successUser (params) {
        return api().put(`/users/${params.login}`, params)
    },
    getUser (params) {
        return api().get(`/users/${params.login}`)
    },
    deleteUser (login) {
        return api().delete(`/users/${login}`)
    },
    getUsers () {
        return api().get('/users')
    }
}
