const OfflinePlugin = require('offline-plugin')

module.exports = {
  generate: {
    routes: {
      '/': true,
      '/for-library': true
    }
  },
  extendWebpack(config, { dev, type }) {
    if (!dev && type === 'client') {
      config.plugin('offline')
        .use(OfflinePlugin, [{
          ServiceWorker: {
            events: true
          },
          AppCache: {
            events: true
          }
        }])
    }
  }
}
