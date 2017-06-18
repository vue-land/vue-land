import createRouter from './router'
import 'typeface-space-mono/index.css'
import 'typeface-work-sans/index.css'
import './css/shared.styl'
import './css/reset.styl'

import App from './components/App.vue'

if (process.env.NODE_ENV === 'production' && process.browser) {
  require('./pwa')
}

export default {
  createRouter,
  App
}
