let {SyncHook} = require('tapable')
class Compiler{
  constructor(options) {
    this.options = options
    this.hooks = {
      run: new SyncHook(),  // 开始启动编译 刚刚开始
      emit: new SyncHook(), // 会在将要写入文件的时候触发
      done: new SyncHook(), // 将会在完成编译的时候触发，全部完成
      // run: new SyncHook(),
    }
  }
  // 4.执行compiler对象的run方法，开始编译
  run (callback) {
    this.hooks.run.call()
    // 根据配置中的entry找出入口文件
    this.hooks.done.call()
    console.log('run 开始编译');
    callback(null, {
      toJson () {
        return {
          files: [], // 产出了哪些文件
          assets: [], // 生成了哪些资源
          chunk: [], // 生成那些代码块
          module: [], // 模块信息
          entries: [] // 入口信息
        }
      }
    })
  }
}
module.exports = Compiler