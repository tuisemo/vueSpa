const {
  FileListPlugin
} = require('./plugins/myCustomPlugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new FileListPlugin({
        outputFile: './dist.zip'
      })
    ]
  }
}
