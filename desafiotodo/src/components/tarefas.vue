<template>
  <div class="tarefas-style">
    <p>Progresso</p>
    <div id="progresso-tarefas" class="progress">
      <div :style="{width : progressoAtual+'%', '--aria-valuenow' : progressoAtual+'%'}" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar">
        <span>{{progressoAtual}}%</span>
      </div>
    </div>
    <div id="input-tarefas">
      <div class="input-group input-group-lg mb-3">
        <input v-model="novaTarefa" type="text" class="form-control" placeholder="Digite a sua tarefa" aria-label="Digite a sua tarefa" aria-describedby="button-addon2" @keypress.enter="adicionarTarefa" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="adicionarTarefa">+</button>
        </div>
      </div>
    </div>
    <lista-tarefas ></lista-tarefas>
  </div>
</template>

<script>
import ListaTarefas from "./listaTarefas.vue";
import Barramento from "./../barramento.js"
export default {
  name: "Tarefas",
  components: {
    ListaTarefas
  },
  props: {},
  data() {
    return {
      progresso: 0,
      novaTarefa: ''
    };
  },
  methods:{
    adicionarTarefa(){  
      const vm  = this
      if(vm.novaTarefa !== ''){
        Barramento.adicionarTarefa(vm.novaTarefa)
        vm.novaTarefa = ''
      }
    },
    calcularProgresso(infoTarefas){
      const vm = this
      const progressoAtual =  Math.round((infoTarefas.completas/infoTarefas.total)*100)
      vm.progresso =  Number.isNaN(progressoAtual) ? 0 : progressoAtual
    }
  },
  computed:{
    progressoAtual(){
      const vm = this
      return vm.progresso
    }
  },
  created(){
    const vm = this
    Barramento.$on('atualizarProgresso', infoTarefas => vm.calcularProgresso(infoTarefas))
  }
};
</script>

<style lang="scss" scoped>
.tarefas-style {
  .lista-tarefas-style {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    align-items: flex-start;
    margin: 2vh 0 0 0;
  }

  p {
    font-size: 3rem;
  }

  #progresso-tarefas {
    height: 3vh;
    width: 80%;
    margin: auto auto 2vh auto;

    .progress-bar {
      width: 0%;
      --aria-valuenow: "0";
      --aria-valuemin: "0";
      --aria-valuemax: "100";
    }
  }

 

  #input-tarefas{

    color: black;
    width: 80%;
    margin: auto auto 2vh auto;

    input{
      background: transparent;
      font-weight: 500;
      border: black solid 1px;
    }

    button,input{
      border: black solid 1px;
    }

    button:focus,input:focus{
      border: black solid 1px;
      box-shadow: 0 0 0 0.2rem rgba($color: #ffffff, $alpha: 0.4);
    }

    button,input,::placeholder{
      color: #2c3e50;
      font-weight: 600;
      font-size: 1.85rem;
    }
  }
}
</style>