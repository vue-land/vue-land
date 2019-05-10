import App from './components/App.vue'
import 'typeface-space-mono/index.css'
import 'typeface-work-sans/index.css'
import './css/shared.styl'
import './css/reset.styl'

export default ({ setRootComponent }) => {
  setRootComponent(App)
}
