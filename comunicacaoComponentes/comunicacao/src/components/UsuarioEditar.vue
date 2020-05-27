<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <div>
            <span>Nome: {{nome}}</span>
            <button @click="alterarNome">Alterar nome</button>
        </div>
        <div>
            <span>Idade: {{idade}}</span>
            <button @click="alterarIdade">Alterar idade</button>
        </div>
    </div>
</template>

<script>
import barramento from '../barramento'

export default {
    props: {
        nome: {type: String, required: true, default: 'Maria'},
    },
    data(){
        return {
            idade: 33
        }
    },
    methods:{
        alterarIdade(){
            this.idade += 1
            barramento.alterarIdade(this.idade)
        },
        alterarNome(){
            this.nome = 'João'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created(){
        barramento.alterarIdade(this.idade)
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
