import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import router from './routers'
import store from './stores'
import i18n from './plugins/i18n'
import config from '@/configs'
import importDirective from '@/directives'
import installPlugin from '@/plugins'
import '@/assets/icons/iconfont.css'
if (process.env.NODE_ENV !== 'production') require('@/mocks')
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
