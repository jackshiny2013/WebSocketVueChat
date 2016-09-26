import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
Vue.use(VueValidator)
Vue.use(VueResource)

Vue.config.debug = true

import {configRouter} from './route'


let buildVersion = 'BUILDVERSION_PLACEHOLDER'
console.log('Build on ' + buildVersion)


const router = new VueRouter({
  saveScrollPosition: true
})

configRouter(router)
window.router = router

router.start(Vue.extend({}), '#app')
