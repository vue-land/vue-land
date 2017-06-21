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
          relativePaths: false,
          excludes: ['CNAME', '*.json'],
          ServiceWorker: {
            events: true
          },
          AppCache: false
        }])
    }
  }
}
