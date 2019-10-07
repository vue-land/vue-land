import './css/shared.styl'
import './css/reset.styl'

if (process.browser) {
  if (location.hostname === 'vue-land.js.org') {
    location.href = `https://vue.land${location.pathname}`
  }
}

export default ({ setHead }) => {
  setHead({
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'
      }
    ]
  })
}
