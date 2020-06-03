<template>
  <div class="content-style">
    <Pomodoro></Pomodoro>
    <hr>
    <Tarefas></Tarefas>
  </div>
</template>
  
<script>

import Pomodoro from "./pomodoro.vue"
import Tarefas from "./tarefas.vue"

export default {
  name: "Content",
  props: {
  },
  components:{
    Pomodoro, Tarefas
  }
};
</script>

<style scoped lang="scss">
  .pomo-style{
    max-height: 25vh;
    padding: 0 2.5vw 0 1.5vw;
  }

  .tarefas-style{
    min-height: 20vh;
    max-width: 80vw;
    margin: auto;
  }
</style>
