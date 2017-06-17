import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component: resolve => require(['../views/Home.vue'], resolve)
    }]
  })

  return router
}
