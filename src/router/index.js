import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    },
    routes: [{
      path: '/',
      component: () => import('../views/Home.vue')
    }, {
      path: '/for-library',
      component: () => import('../views/ForLibrary.vue')
    }, {
      path: '/polls',
      component: () => import('../views/Polls.vue')
    }, {
      path: '/guideline',
      component: () => import('../views/Guideline.vue')
    }]
  })

  if (process.browser) {
    require('nprogress/nprogress.css')
    const nprogress = require('nprogress')

    nprogress.configure({ showSpinner: false })

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
