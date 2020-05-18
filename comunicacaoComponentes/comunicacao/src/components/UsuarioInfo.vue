<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <span>Nome do usuário: <strong>{{nome}}</strong> </span>
    </div>
</template>

<script>
export default {
    props: ['nome']
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
