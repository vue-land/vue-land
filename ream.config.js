const OfflinePlugin = require('offline-plugin')

module.exports = {
  generate: {
    routes: ['/', '/for-library', '/polls']
  },
  extendWebpack(config, { dev, type }) {
    if (!dev && type === 'client') {
      config.plugin('offline')
        .use(OfflinePlugin, [{
          relativePaths: false,
          responseStrategy: 'network-first',
          excludes: ['CNAME', '*.json'],
          ServiceWorker: {
            events: true
          },
          AppCache: false
        }])
    }
  }
}
