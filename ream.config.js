const path = require('path')
const glob = require('fast-glob')

const qa = glob.sync('*.md', { cwd: './src/markdown/q-and-a' })

module.exports = {
  entry: 'src/index.js',
  generate: {
    routes: [
      '/',
      '/for-library',
      '/polls',
      '/guideline',
      '/q-and-a',
      '/01-guillaume-chau-evan-you',
      '/02-damian-dulisz-chris-fritz'
    ].concat(qa.map(id => `/q-and-a/${id.replace(/\.md$/, '')}`))
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', path.resolve('src'))

    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vmark-loader')
      .loader('vmark-loader')
      .options({
        markdown: {
          linkify: true
        }
      })
  }
}
