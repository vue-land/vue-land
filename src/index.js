import createRouter from './router'
import 'typeface-space-mono/index.css'
import 'typeface-work-sans/index.css'
import './css/shared.styl'

if (process.env.NODE_ENV === 'production' && process.browser) {
  require('./pwa')
}

export default {
  createRouter
}
