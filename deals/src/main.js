// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
import lazysizes from 'lazysizes'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(lazysizes);
 
require('font-awesome/css/font-awesome.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
