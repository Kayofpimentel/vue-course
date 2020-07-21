<template>
  <div id="usuario">
        <h2>Componente com rota</h2>
        <hr>
        <b-button variant="primary" to="/">Ir para rotas</b-button>
  </div>
</template>

<script>
export default {
    props:{
        msg:{
            type: String,
            required: true
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