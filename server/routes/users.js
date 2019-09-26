const User = require('../src/models/user-model')
const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    User.find({}, 'name login password phone country city operationSystem code activate', (err, users) => {
        err ? res.sendStatus(500) : res.send({users: users})
    }).sort({_id: -1})
})

router.post('/users', (req, res) => {
    const user = new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        operationSystem: req.body.operationSystem,
        code: req.body.code,
        activate: req.body.activate
    })
    user.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `User with ID_${data._id} saved successfully`
            })
        }
    })
})

router.get('/users/:login', (req, res) => {
    User.find({login: req.params.login}, 'name login password phone country city operationSystem code activate', (err, user) => {
        err ? res.sendStatus(500) : res.send({users: user})
        console.log(res)
    })
})

router.put('/users/:login', (req, res) => {
    User.findOne({login: req.params.login}, 'name login password phone country city operationSystem code activate', (err, user) => {
        if (err) {
            console.log(err);
        } else {
            user.activate = true

            console.log(user)

            user.save(err => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

router.delete('/users/:login', (req, res) => {
    User.remove({login: req.params.login}, (err) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router
