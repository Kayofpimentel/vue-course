<template>
  <div id="app">
    <Exercicios msg="Transições e Animações" />
  </div>
</template>

<script>
import Exercicios from "./components/Exercicios.vue";

export default {
  name: "App",
  components: {
    Exercicios
  } 
};
</script>

<style lang="scss">

@import url("./../../../estilo/dom.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  h1{
    font-size: 4rem;
  }

}
</style>
