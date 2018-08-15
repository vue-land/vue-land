module.exports = {
  entry: 'src/index.js',
  generate: {
    routes: ['/', '/for-library', '/polls', '/guideline']
  },
  chainWebpack(config) {
    config.module.rule('md')
      .test(/\.md$/)
      .use('vue-loader')
        .loader('vue-loader')
        .end()
      .use('vmark-loader')
        .loader('vmark-loader')
  }
}
