// vue.config.js
// const path = require('path')
module.exports = {
  // options...
  baseUrl: '/',
  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: false,
  devServer: {
    proxy: 'http://127.0.0.1:7001'
  },
  // configureWebpack: {
  //   resole: {
  //     alias: {
  //       '@': path.resolve(__dirname, 'src/')
  //     }
  //   }
  // },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}
