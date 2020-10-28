<template>
<div id="app">
  <div class="nav">
    <span class="logo">Stock Trader</span>
    <button>Inicio</button>
    <button>Inicio</button>
    <button>Inicio</button>
  </div>
  <router-view/>
</div>
</template>

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
  margin: 1rem auto 1.5rem 1rem;
  text-align: left;
  button {
    font-weight: bold;
    color: #2c3e50;
    white-space: pre;
  }
  .logo{
    margin-right: 2rem;
  }
}
</style>
