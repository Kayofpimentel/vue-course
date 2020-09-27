<template>
  <div id="app">
    <h1>Exercícios Vuex</h1>
    <hr />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("./../../../estilo/dom.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h2 {
    padding: .2rem 0 0 0 !important;
    margin: auto;
  }
  .conteudo div {
    text-align: center;
    span,
    input {
      width: 40%;
      display: inline-block;
    }
  }

  section button {
    margin-top: 2vh;
  }
}
</style>
