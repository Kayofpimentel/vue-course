<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome do usuário: <strong>{{nome.split('').reverse().join('')}}</strong> </p>
        <p>Idade do Usuário: {{idade}}</p>
    </div>
</template>

<script>

import barrameto from '../barramento'

export default {
    props: {
        nome: {type: String, /*required: true ,*/ default: 'João'},
        
    },
    data(){
        return{
            idade: Number
        }
    },
    methods:{
    },
    created(){
        barrameto.mudancaIdade(idade =>
        this.idade = idade)
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
