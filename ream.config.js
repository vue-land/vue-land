module.exports = {
  entry: "src/index.js",
  generate: {
    routes: [
      "/",
      "/for-library",
      "/polls",
      "/guideline",
      "/q-and-a/",
      "/q-and-a/01-guillaume-chau-evan-you",
      "/q-and-a/02-damian-dulisz-chris-fritz"
    ]
  },
  chainWebpack(config) {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vmark-loader")
      .loader("vmark-loader");
  }
};
