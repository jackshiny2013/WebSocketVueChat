/**
 * Created by Administrator on 2016/6/2.
 */

export function configRouter(router) {
  router.redirect({
    '/': 'main'
  })

  // 路由
  router.map({
    '/login': {
      name: 'login',
      component: require('../views/login.vue')
    },
    '/main': {
      name: 'k',
      component: require('../App.vue'),

    }
  })
  //router.beforeEach((transition) => {
  //  if (transition.to.path === '/forbidden') {
  //    router.app.authenticating = true
  //    setTimeout(() => {
  //      router.app.authenticating = false
  //      alert('this route is forbidden by a global before hook')
  //      transition.abort()
  //    }, 3000)
  //  } else if (!false && transition.to.path !== '/login') {
  //     router.go('login');
  //  } else {
  //    transition.next()
  //  }
  //})
}
