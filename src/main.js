/*
 * @Descripttion: 
 * @version: 
 * @Author: alan.lau
 * @Date: 2022-04-14 13:31:56
 * @LastEditors: alan.lau
 * @LastEditTime: 2022-04-14 15:40:19
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式
import './assets/css/global.css'
Vue.config.productionTip = false

import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:7000/api/private/v1/'
Vue.prototype.$http = axios
window.$http = axios

const Cesium = require('cesium/Cesium')
window.Cesium = Cesium
const widgets = require('cesium/Widgets/widgets.css')
window.widgets = widgets

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
