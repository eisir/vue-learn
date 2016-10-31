// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App'
import route from './router/index'

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.http.options.root = '/static';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;


Vue.use(Vuex);
Vue.use(VueRouter);

const router =new VueRouter(route);


const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');