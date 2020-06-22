<template>
  <div class="lista-tarefas-style" >
    <span v-for="(tarefa, index) in lista" :class="{'badge-danger':!tarefa.status, 'badge-success':tarefa.status}" :key="index" class="badge caixa-tarefa" @click="finalizarTarefa(tarefa)">
      <p >{{tarefa.descricao}}</p>
      <button @click.stop="retirarTarefa(index)" type="button" class="close acao-finalizar" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </span>
    
  </div>
</template>

<script>
import Barramento from "./../barramento.js"

export default {
  name: "ListaTarefas",
  data() {
    return {
      lista: [{ descricao: "Teste Teste", status: 1 },{ descricao: "Tesate", status: 0 },{ descricao: "b", status: 0 },{ descricao: "c", status: 0 },{ descricao: "Teste Teste Teste", status: 0 },{ descricao: "Teste", status: 0 },{ descricao: "d", status: 0 },{ descricao: "e", status: 0 },{ descricao: "Teste Teste Teste Teste TesteTeste Teste Teste Teste", status: 0 },{ descricao: "Teste Teste Teste Teste", status: 0 }]
    }
  },
  methods:{
    finalizarTarefa(tarefa){
      const vm = this
      tarefa.status = !tarefa.status
      vm.$nextTick(Barramento.atualizarProgresso(vm.calcularCompletas))
    },
    retirarTarefa(index){
      const vm = this
      vm.lista.splice(index,1)  
    },
    adicionarTarefa(novaTarefa){
      const vm = this
      vm.lista.push({descricao: novaTarefa, status: 0})
      console.log(novaTarefa)
      console.log(vm.lista)
    },
  },
  computed:{
    calcularCompletas(){
      const vm = this
      let totalTarefas = 0
      let totalFeito = 0
      if(vm.lista.length >= 1){
        totalTarefas = vm.lista.length
        const feitas = (statusTarefa, total) => statusTarefa + total
        totalFeito = vm.lista.map(tarefa => tarefa.status).reduce(feitas)
      }
      return {completas: totalFeito, total: totalTarefas}
    }
  },
  watch:{
    lista(){
      const vm = this
      Barramento.atualizarProgresso(vm.calcularCompletas)
    }
  },

  created(){
    const vm = this
    Barramento.atualizarProgresso(vm.calcularCompletas)
    Barramento.$on('adicionarTarefa', novaTarefa => vm.adicionarTarefa(novaTarefa))
  }
};
</script>

<style lang="scss" scoped>
.lista-tarefas-style {
  .badge {
    font-size: 3.2rem;
    border-radius: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: break-spaces;
    max-height: 10vh;
    line-height: 4.5vh;
  }

  .badge-succ ess{
    text-decoration: line-through;
  }

  .caixa-tarefa{
    padding: 1.2rem .5rem .8rem .8rem;
    margin: 0 0 1vh 0;
    cursor: pointer;
  }

  .caixa-tarefa p{
    display: inline;
    margin: auto;
  }

  .close{
    z-index: 2;
    opacity: .7;
    color: white;
    
  }
  .acao-finalizar span{
    background-color: black;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: inline-block;
    line-height: 1.5rem;
    bottom: 1.2vh;
    position: relative;
    font-size: 1.4rem;
  }
  

}
</style>