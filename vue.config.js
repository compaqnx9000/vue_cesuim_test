/*
 * @Author: alan.lau
 * @Date: 2022-01-08 11:45:33
 * @LastEditTime: 2022-04-14 14:04:55
 * @LastEditors: alan.lau
 * @Description:
 * @FilePath: \vue_cesium_plot\vue.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

let cesiumSource = './node_modules/cesium/Source'
// let cesiumSource = './public/cesium/Source'
// let cesiumSource = './public/Cesium-ion-SDK-1.82/Source'

let cesiumWorkers = '../Build/cesium/Workers'
// let cesiumWorkers = './public/cesium/Source/Workers'

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,
  devServer: {
    open: process.platform == 'darwin',
    host: '0.0.0.0',
    port: 8765,
    https: false,
    hotOnly: false
  },
  configureWebpack: {
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        cesium: path.resolve(__dirname, cesiumSource)
      }
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, cesiumWorkers),
          to: 'Workers'
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, 'Assets'),
          to: 'Assets'
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, 'Widgets'),
          to: 'Widgets'
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, 'ThirdParty/Workers'),
          to: 'ThirdParty/Workers'
        }
      ]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./')
      })
    ],
    module: {
      unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false
    }
  }
}
