const webpack = require('./webpack')
const webpackOptions = require('./webpack.config')

// compiler 代表整个编译过程
const compiler = webpack(webpackOptions)
// 执行compiler对象的run方法，开始编译
compiler.run((err, stats) => {
  let result = stats.toJson({
    files: [], // 产出了哪些文件
    assets: [], // 生成了哪些资源
    chunk: [], // 生成那些代码块
    module: [], // 模块信息
    entries: [] // 入口信息
  })
  // console.log(JSON.stringify(result, null, 2));
})