import Vue from 'vue'
import Meta from 'vue-meta'
import router from './router'
import 'typeface-space-mono/index.css'
import 'typeface-work-sans/index.css'
import './css/shared.styl'
import './css/reset.styl'

import App from './components/App.vue'

Vue.use(Meta, {
  keyName: 'head',
  attribute: 'data-static-head',
  ssrAttribute: 'data-static-rendered'
})

export default new Vue({
  router,
  render: h => h(App)
})
