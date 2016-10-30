// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App'

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.http.options.root = '/static';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;

Vue.use(Vuex);
Vue.use(VueRouter);

const routes=[
	{
		path: '/home',
    component(resolve){
      require(['./views/Home'],resolve);
    }
	},
  {
    path: '/demo',
    component(resolve){
      require(['./views/Demo'],resolve);
    }
  }
];
const router =new VueRouter({
  routes
});
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');