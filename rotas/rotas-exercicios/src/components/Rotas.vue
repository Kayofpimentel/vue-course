<template>
    <div id="ex-rotas">
        <h2>Componente com rota</h2>
        <hr>
        <b-button variant="success" to="/usuario">Ir para usuário</b-button>
    </div>
</template>

<script>
export default {
    props:{
        msg: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
    #ex-rotas{
        background: lightcyan;
        height: 100%;
        width: 100%;
        padding: 0;
    }
</style>
