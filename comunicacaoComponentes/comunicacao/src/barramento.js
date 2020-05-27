import Vue from 'vue'
export default new Vue({

    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        mudancaIdade(callback){
            this.$on('idadeMudou', callback)
        }
    }

})