import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-modulo15.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})