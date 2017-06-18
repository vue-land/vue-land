import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component: resolve => require(['../views/Home.vue'], resolve)
    }, {
      path: '/for-library',
      component: resolve => require(['../views/ForLibrary.vue'], resolve)
    }]
  })

  if (process.browser) {
    require('nprogress/nprogress.css')
    const nprogress = require('nprogress')

    router.beforeEach((from, to, next) => {
      nprogress.start()
      next()
    })

    router.afterEach(() => {
      nprogress.done()
    })
  }

  return router
}
