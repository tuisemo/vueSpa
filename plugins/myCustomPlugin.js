const fs = require('fs')
const JSZip = require('jszip')

const template = {
  appId: '离线包应用AppId',
  name: '离线包应用名',
  version: '离线包应用版本',
  updateTime: '离线包应用配置项更新时间',
  packages: [
    {
      packageName: 'app1',
      moduleId: 'xxxxxx',
      dependencies: ['packageA'],
      packageUrl: 'https://cdn.zhongshu.com/offline/xxxxxx.zip', // 完整包地址
      patchUrl: 'https://cdn.zhongshu.com/offline/xxxxxx.zip', // 补丁包地址
      packageMD5: 'xxxxxxxxxxxxx',
      patchMD5: 'xxxxxxxxxxxxx'
    },
    {
      packageName: 'packageA',
      dependencies: [],
      packageUrl: 'https://cdn.zhongshu.com/offline/xxxxxx.zip', // 完整包地址
      patchUrl: 'https://cdn.zhongshu.com/offline/xxxxxx.zip', // 补丁包地址
      packageMD5: 'xxxxxxxxxxxxx',
      patchMD5: 'xxxxxxxxxxxxx'
    }
  ]
}
class FileListPlugin {
  static defaultOptions = {
    outputFile: 'dist.zip',
    ignoreFileTypes: ['.ico', '.js.map']
  }

  // 需要传入自定义插件构造函数的任意选项
  // （这是自定义插件的公开API）
  constructor(options = {}) {
    // 在应用默认选项前，先应用用户指定选项
    // 合并后的选项暴露给插件方法
    // 记得在这里校验所有选项
    this.options = {
      ...FileListPlugin.defaultOptions,
      ...options
    }
  }

  apply(compiler) {
    // 删除历史压缩包
    compiler.hooks.compilation.tap('delete-zip', (compilation) => {
      if (fs.existsSync(this.options.outputFile)) {
        fs.unlinkSync(this.options.outputFile)
      }
    })
    compiler.hooks.afterEmit.tapPromise('zip-assets', (compilation) => {
      return new Promise((resolve) => {
        const { ignoreFileTypes } = this.options
        const ignoreFileRex = ignoreFileTypes.join('|')
        const REX = new RegExp(`(${ignoreFileRex})$`)
        const fileNames = Object.keys(compilation.assets).filter((path) => {
          return !path.match(REX)
        })
        // 创建zip实例并写入文件流
        const zip = new JSZip()
        fileNames.forEach((key) => {
          zip.file(key, compilation.assets[key].source())
        })
        // 将zip压缩包输出到对应目录
        zip
          .generateNodeStream({
            type: 'nodebuffer',
            streamFiles: true
          })
          .pipe(fs.createWriteStream(this.options.outputFile))
          .on('finish', () => {
            console.log('======压缩包打包成功=======')
            resolve()
          })
      })
    })
  }
}

module.exports = {
  FileListPlugin
}
