<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <span>Nome do usuário: <strong>{{nome.split('').reverse().join('')}}</strong> </span>
        <hr>
        <button @click="voltarNome">Voltar Nome</button>
        <button @click="reiniciarFn">Reiniciar nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {type: String, /*required: true ,*/ default: 'João'},
        reiniciarFn: Function
    },
    methods:{
        voltarNome(){
            this.$emit('nomeMudou', 'Pedro')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
