// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/icon-font/icon/iconfont.css'
import './assets/js/rem'

//全局组件
import vTitle from './common'
for (let i in vTitle) {
  Vue.component(i, vTitle[i])
}

//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//引入vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import axios from 'axios'
Vue.prototype.$axios = axios;


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
