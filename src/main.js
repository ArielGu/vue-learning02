// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
