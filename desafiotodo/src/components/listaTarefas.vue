<template>
  <div class="lista-tarefas-style" >
    <span v-for="(status, chave) in tarefas" :class="{'badge-danger':!status, 'badge-success':status}" :key="chave" class="badge caixa-tarefa" @click="finalizarTarefa(chave)">
      <p >{{chave}}</p>
      <button @click.stop="retirarTarefa(chave)" type="button" class="close acao-finalizar" aria-label="Close">
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
      tarefas: {}
    }
  },
  methods:{
    finalizarTarefa(chave){
      const vm = this
      vm.tarefas[chave] = !vm.tarefas[chave]
    },
    retirarTarefa(chave){
      const vm = this
      vm.$delete(vm.tarefas, chave)
    },
    adicionarTarefa(novaTarefa){
      const vm = this
      vm.$set(vm.tarefas,novaTarefa,false)
    },
  },
  computed:{
    calcularCompletas(){
      const vm = this
      let totalTarefas = Object.entries(vm.tarefas).length
      let totalFeito = 0
      if(totalTarefas >= 1){
        const feitas = (statusTarefa, total) => statusTarefa + total
        const listaTarefas = Object.entries(vm.tarefas)
        totalFeito = listaTarefas.map(tarefa => tarefa[1] ? 1 : 0).reduce(feitas)
      }
      return {completas: totalFeito, total: totalTarefas}
    }
  },
  watch:{
    tarefas:{
      deep: true,
      handler(){
        const vm = this
        Barramento.atualizarProgresso(vm.calcularCompletas)
        localStorage.setItem('tarefas', JSON.stringify(vm.tarefas))
      }
    }
  },

  created(){
    const vm = this
    const localTarefas = localStorage.getItem('tarefas') 
    vm.tarefas = JSON.parse(localTarefas) || {'Primeira tarefa': false} 
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
    user-select: none;
    box-sizing: border-box;
    position: relative;
  }

  .badge-success{
    text-decoration: line-through;
  }

  .caixa-tarefa{
    margin: 0 0 1vh 0;
    cursor: pointer;

    p{
    display: inline;
    margin: auto .5vw auto auto;
    }

    .acao-finalizar{
    z-index: 2;
    opacity: .7;
    color: white;
    position: absolute;
    top: .3rem;
    right: .4rem;
  }
  .acao-finalizar span{
    background-color: black;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: .7rem;
    display: flex;
    justify-content: center;
    
  }

  }

  

  
  

}
</style>