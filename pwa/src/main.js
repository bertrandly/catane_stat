import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'

// datepicker
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)
Vue.component('datetime', Datetime)

Vue.config.productionTip = false

//creating a filter to display date
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
