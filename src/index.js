import createRouter from './router'
import 'typeface-space-mono/index.css'
import 'typeface-work-sans/index.css'
import './css/shared.styl'
import './css/reset.styl'

import App from './components/App.vue'

export default () => ({
  router: createRouter(),
  root: App
})
