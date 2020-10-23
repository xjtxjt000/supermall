import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials = true

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
