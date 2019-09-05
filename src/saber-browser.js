import App from './components/App.vue'
import 'typeface-space-mono/index.css'
import 'typeface-work-sans/index.css'
import './css/shared.styl'
import './css/reset.styl'

if (process.browser) {
  if (location.hostname === 'vue-land.js.org') {
    location.href = `https://vue.land${location.pathname}`
  }
}

export default ({ setRootComponent }) => {
  setRootComponent(App)
}
