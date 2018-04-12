module.exports = {
  entry: 'src/index.js',
  plugins: [
    require('@poi/plugin-vue-static')({
      routes: ['/', '/for-library', '/polls', '/guideline']
    })
  ]
}
