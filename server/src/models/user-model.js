const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserShema = new Schema({
    name: {
        type: String
    },
    login: {
        unique: true,
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    operationSystem: {
        type: String
    },
    code: {
        type: String
    },
    activate: {
        type: Boolean
    }
})

const UserModel = mongoose.model('users', UserShema)
module.exports = UserModel
