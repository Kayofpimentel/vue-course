<template>
  <div id="app">
    <HelloWorld :msg="msg " />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data(){
    return{
      msg: "CRUD com Axios"
    }
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
  margin-top: 60px;

  legend{
  text-align: left;
  }

  div.bv-no-focus-ring{
      padding-left: 0;  
  }
  
}
</style>
