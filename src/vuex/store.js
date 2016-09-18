/**
 * Created by Administrator on 2016/9/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import middleware from './middleware'
import auth from './modules/auth'


const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
    modules: {
        auth
    },
    strict: debug,
    middleware
})
