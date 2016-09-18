import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
// import 'bootstrap/less/bootstrap.less'
// import './assets/less/main.less'

// import 'echarts/src/echarts.js'
// require('echarts')
// requiring the UMD module
// var ECharts = require('vue-echarts/dist/vue-echarts')
// // or with vue-loader you can require the src directly
// var ECharts = require('vue-echarts/src/components/ECharts.vue')
// // register component to use
// Vue.component('chart', ECharts);


// var VueLoading = require('../src/components/company_detail/index.vue');
// Vue.component('vue-loading', VueLoading);

Vue.use(VueRouter)
Vue.use(VueValidator)

Vue.config.debug = true

import {configRouter} from './route'

const buildVersion = 'BUILD_VERSION_PLACEHOLDER'
console.log('Build on ' + buildVersion)

const router = new VueRouter({
    saveScrollPosition: true
})

configRouter(router)
sync(store, router)

router.start(Vue.extend({
    store
}), '#app')
window.router = router
