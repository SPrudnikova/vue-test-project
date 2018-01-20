// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import VeeValidate from 'vee-validate'

import App from './App'
import router from './router'
import store from './store'
import {uppercase} from './filters'

// Подключаем vee-validate
Vue.use(VeeValidate)
Vue.config.productionTip = false
Vue.filter('uppercase', uppercase)

window.addEventListener('unhandledrejection', event => {
  window.console.error(event.promise)
  window.console.error(event.reason)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
