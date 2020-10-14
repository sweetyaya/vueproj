// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import i18n from './i18n'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(ElementUI)
Vue.use(api)
new Vue({
  el: '#app',
  i18n,
  router,
  render: h=> h(App)
  //components: { App },
  //template: '<App/>'
})
