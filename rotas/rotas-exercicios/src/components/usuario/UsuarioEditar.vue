<template>
    <div class="edicao">
        <p>Editar {{id}}</p>
        <p><strong>Completo:</strong> {{$route.query.completo ? "Sim" : "Não"}}</p>
        <p><strong>Língua:</strong> {{$route.query.lingua}}</p>
        <hr>
        <b-button @click="confirmado = true" sucesso>Confirmar</b-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            confirmado: false
        }
    },
    props:{
        id:{
            type: String,
            required: true
        }
    },
    created(){
        this.confirmado = false 
    },
    beforeRouteEnter(...route) {
        console.log('dentro do componente -> usuário editar')
        route[2]()
    },
    beforeRouteLeave(...route){
        const next = route[2]
        if(this.confirmado){
            next()
        } else{
            if(confirm('Tem certeza?')){
                next()
            }
            else{
                next(false)
            }
        }
    }
}
</script>

<style>

</style>