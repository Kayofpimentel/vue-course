<template>
  <div class="tarefas-style">
    <p>Progresso</p>
    <div class="progress">
      <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar">
        <span>25%</span>
      </div>
    </div>
    <lista-tarefas></lista-tarefas>
  </div>
</template>

<script>
import ListaTarefas from "./listaTarefas"

export default {
  name: "Tarefas",
  components:{
    ListaTarefas
  },
  props: {}
};
</script>

<style lang="scss" scoped>
.tarefas-style {

  .lista-tarefas-style{
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

  .progress{
    height: 3vh;
    width: 80%;
    margin: auto;
  }

  .progress-bar{
    width: 50%;
    --aria-valuenow:"70";
    --aria-valuemin:"0"; 
    --aria-valuemax:"100";
  }
}
</style>