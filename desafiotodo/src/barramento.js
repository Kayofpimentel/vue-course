import Vue from 'vue'
export default new Vue({

    methods:{
        adicionarTarefa(tarefa){
            console.log(tarefa)
            this.$emit("adicionarTarefa",tarefa)
        },
        atualizarProgresso(infoTarefas){
            console.log(infoTarefas)
            this.$emit("atualizarProgresso", infoTarefas)
        }
    }

})