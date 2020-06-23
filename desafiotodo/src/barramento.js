import Vue from 'vue'
export default new Vue({

    methods:{
        adicionarTarefa(tarefa){
            this.$emit("adicionarTarefa",tarefa)
        },
        atualizarProgresso(infoTarefas){
            this.$emit("atualizarProgresso", infoTarefas)
        }
    }

})