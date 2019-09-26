import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/AuthPage'
import Registration from '@/components/RegistrationPage'
import Code from '@/components/CodePage'
import Confirm from '@/components/EnterCodePage'
import Personal from '@/components/PersonalPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/code/:login',
      name: 'Code',
      component: Code
    },
    {
      path: '/confirm/:login',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/lk/:id',
      name: 'Personal',
      component: Personal
    }
  ]
})
