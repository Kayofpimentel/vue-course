<template>
    <div class="edicao">
        <p>Editar {{id}}</p>
        <p><strong>Completo:</strong> {{$route.query.completo ? "Sim" : "Não"}}</p>
        <p><strong>Língua:</strong> {{$route.query.lingua}}</p>
        <hr>
        <b-button sucesso>Confirmar</b-button>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            type: String,
            required: true
        }
    },
    beforeRouteEnter(...route) {
        console.log('dentro do componente -> usuário editar')
        route[2]()
    }
}
</script>

<style>

</style>