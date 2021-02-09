<template>
  <div id="app">
    <div class="nav">
      <span class="logo">Stock Trader</span>
      <button @click="changeComponent('Inicio')">Início</button>
      <button @click="changeComponent('Portfolio')">Portfólio</button>
      <button @click="changeComponent('HomeBroker')">Ações</button>
      <p class="resultado">Resultado: {{ resultado }}</p>
      <p class="saldo">Saldo: {{ saldo }}</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    saldo() {
      const vm = this;
      return vm.$store.getters.getSaldo;
    },
    resultado() {
      const vm = this;
      return vm.$store.getters.getResultado;
    },
  },
  methods: {
    changeComponent(componentName) {
      const vm = this;
      vm.$store.commit("setComponent", componentName);
    },
  },
};
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
  box-shadow: 0px 0.2rem 0.3rem gray;
  background: #e0e0e0;
  font-size: 0.9rem;
  button {
    text-transform: uppercase;
    padding: 0 1rem;
    font-weight: bold;
    color: #2c3e50;
    border: none;
  }
  button:focus {
    outline: none;
    background: #c8c8c8;
  }
  .logo {
    margin: 0 2rem 0 2rem;
    font-size: 2rem;
  }
  .saldo {
    margin: auto 2rem auto 0;
  }
  .resultado {
    margin: auto 2rem auto auto;
  }
}
</style>
