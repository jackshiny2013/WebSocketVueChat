/**
 * Created by Administrator on 2016/9/20.
 */

export function configRouter(router) {

  router.redirect({
    '*': '/'
  })
  router.map = ({
    '/': {
      component: require('../App.vue')
    },
    '/login': {
      component: require('../views/Login.vue')
    }
  })

}
