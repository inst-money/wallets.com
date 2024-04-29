import Vue from 'vue'
import AntDesign, { Icon } from 'ant-design-vue'
import * as echarts from 'echarts'

import App from './App.vue'
import i18n from './utils/i18n' // todo remove i18n
import router from './router'
import 'ant-design-vue/dist/antd.less'

import './styles/index.scss'

Icon.setTwoToneColor('#0045ff')

Vue.config.productionTip = false

Vue.use(AntDesign)

Vue.prototype.$echarts = echarts

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
