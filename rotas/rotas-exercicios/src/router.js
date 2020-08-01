import Vue from 'vue'
import Router from 'vue-router'
import Rotas from './components/Rotas.vue'
import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import Nomeado from './components/RouterNomeado.vue'
import Nomeado2 from './components/RouterNomeadoAlt.vue'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    scrollBehavior(to){
        if(to.hash){
            return {selector: to.hash}
        }
        else{
            return {x:0,y:0}
        }
        
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Rotas 
        components: {
            default: Rotas,
            nomeado: Nomeado
        }
    }, {
        path: '/usuario',
        components: {
            default: Usuario,
            nomeado: Nomeado2
        },
        props: true,
        children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true,
            beforeEnter: (...route) => {
                console.log('antes da rota -> detalhee usuário')
                route[2]()  }},
            {path: ':id/editar', component: UsuarioEditar, props: true,
            name: 'editarUsuario'}
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    },
    {
        path: '*',
        redirect: '/'
    } ]
})

router.beforeEach( (...route) => {
    const next = route[2]
    console.log('antes das rotas -> global')
    next()
})

export default router