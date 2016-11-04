// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App'
import routeConfig from './router/index'
import storeConfig from './store/index'

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.http.options.root = '/static'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
Vue.http.options.emulateJSON = true


Vue.use(Vuex)
const store = new Vuex.Store(storeConfig)


Vue.use(VueRouter)
const router = new VueRouter(routeConfig)



const app = new Vue({
  store,
  router,
  ...App
}).$mount('#app')

// const app = new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')