class RunPlugin {
  apply (compiler) {
    compiler.hooks.run.tap('RunPlugin', () => {
      console.log('RunPlugin 开始编译');
    })
  }
}

module.exports = RunPlugin