<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <hr>
    <Menu></Menu>
    <div id="code-boxes">
        <section class="half-page">
            <router-view :msg="msg" />
        </section>
    </div>
    
  </div>
</template>

<script>
import Menu from './components/menu/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  data(){
    return{
      msg: 'Rotas'
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

  .half-page{
    padding: 0;
  }

  nav{
    justify-content: center;
  }
}
</style>
