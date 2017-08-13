// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue';
import lazysizes from 'lazysizes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(lazysizes);
 
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://192.168.1.100:5000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})