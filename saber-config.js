module.exports = {
  siteConfig: {
    title: 'Vue Land',
    description:
      'A chat community for library authors, contributors, end users on the Vue land.'
  },
  theme: './src',
  permalinks: {
    page: '/:slug'
  },
  plugins: [
    {
      resolve: 'saber-plugin-google-analytics',
      options: {
        trackId: 'UA-54857209-19'
      }
    }
  ]
}
