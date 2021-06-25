const path = require('path');
const RunPlugin = require('./plugins/run-plugin')
const DonePlugin = require('./plugins/done-plugin')
module.exports = {
  mode: 'production',
  devtool: false,
  context: process.cwd(),
  entry: {
    entry: './src/index.js'
  },
  plugins: [
    new RunPlugin(),
    new DonePlugin()
  ]
}