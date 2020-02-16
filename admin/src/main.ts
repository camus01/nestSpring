import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store'
import './plugins/element'
import './plugins/avue'
import router from './router'
// import EleForm from 'vue-ele-form' 

// Vue.use(EleForm)

Vue.config.productionTip = false

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.prototype.$http = http
Vue.prototype.$httpajax = http //Avue上传

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
