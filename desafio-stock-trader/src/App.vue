<template>
  <div id="app">
    <div class="nav">
      <span class="logo">Stock Trader</span>
      <button @click="changeComponent('inicio')">Início</button>
      <button @click="changeComponent('portfolio')">Portfólio</button>
      <button @click="changeComponent('homeBroker')">Ações</button>
      <p class="saldo">Saldo: 10000</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    changeComponent(componentName){
      const vm = this
      vm.$store.changeFocus(componentName)
    }
  }
}
</script>

<style lang="scss">
@import url("./assets/bootstrap.min.css");
@import url("./assets/default.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  text-align: left;
  box-shadow: 0px .2rem .3rem gray;
  background: #E0E0E0;
  font-size: .9rem;
  button {
    text-transform: uppercase;
    padding: 0 1rem;
    font-weight: bold;
    color: #2c3e50;
    border: none;
  }
  button:focus{
    outline: none;
    background: #C8C8C8;
  }
  .logo {
    margin: 0 2rem 0 2rem;
    font-size: 2rem;
  }
  .saldo{
    margin: auto 2rem auto auto
  }
}
</style>
