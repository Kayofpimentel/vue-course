import Vue from 'vue'
import Router from 'vue-router'
import Rotas from './components/Rotas.vue'
import Usuario from './components/usuario/Usuario.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '*',
        component: Rotas 
    }, {
        path: '/usuario',
        component: Usuario
    }]
})