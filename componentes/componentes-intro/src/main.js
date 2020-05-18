import Vue from 'vue'
import App from './app.vue'
import Contadores from './contadores.vue'

Vue.config.productionTip = false

Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
