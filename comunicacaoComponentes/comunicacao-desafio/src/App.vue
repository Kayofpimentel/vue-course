<template>
  <div id="app">
    <h1>Desafio Comunicação</h1>
    <hr>
    <div id="code-boxes">
      <comp-tabela></comp-tabela>
      <comp-usuario></comp-usuario>
    </div>
  </div>
</template>

<script>
import CompUsuario from './components/Usuario.vue'
import CompTabela from './components/Tabela.vue'

export default {
  name: 'App',
  components: {CompUsuario, CompTabela}
};
</script>

<style lang='sass'>
  @import '../../../estilo/dom.css'
</style>
