<template>
  <div id="usuario">
        <h2>Componente com rota</h2>
        <b-button sucesso @click="irParaOInicio">Ir para rotas</b-button>
        <hr>
        <router-view/>
  </div>
</template>

<script>
export default {
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // },
    // watch:{
    //     $route(to /*, from*/){
    //         this.id = to.params.id
    //     }
    // },
    props:{
    },
    methods:{
        irParaOInicio(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
    #usuario{
        background: lightgreen;
        height: 100%;
        width: 100%;
        padding: 0;
    }
</style>