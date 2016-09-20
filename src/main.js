import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Login from  './views/Login.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);
Vue.use(VueResource)


const router = new VueRouter()
router.map({
  '/':{
    component: Login
  },
  '/login': {
    component: Login
  }
})

router.redirect({
  '*': '/login'
})
router.start(Login,'#app')
window.router = router;
