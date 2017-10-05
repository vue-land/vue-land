const Renderer = require('ream-renderer-vue')

module.exports = {
  renderer: new Renderer(),
  generate: {
    routes: ['/', '/for-library', '/polls']
  }
}
