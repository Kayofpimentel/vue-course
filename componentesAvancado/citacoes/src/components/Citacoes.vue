<template>
    <div class="citacoes">
        <citacao>
            <p v-for="citacao in citacoes[indice]" :key=citacao slot="texto">{{citacao}}</p>
            <p>{{ indice + 1 }} / {{citacoes.length}}</p>
        </citacao>
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
    </div>
</template>

<script>
import Citacao from './Citacao'

export default {
    components:{
        Citacao
    },

    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            const vm = this
            return Math.abs(vm.numero % vm.citacoes.length)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
