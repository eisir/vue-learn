// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

/* eslint-disable no-new */
// Vue.directive('focus',{
//   inserted:function(el){
//     el.focus();
//   }
// })
Vue.use(Vuex)
new Vue({
  el: '#app',
  render: h => h(App)
})
