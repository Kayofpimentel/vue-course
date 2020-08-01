<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <hr>
    <Menu></Menu>
    <div id="code-boxes">
        <section class="half-page">
          <transition enter-active-class="animate__animated animate__jackInTheBox" leave-active-class="animate_animated animate__hinge" mode="out-in">
            <router-view/>
          </transition>
        </section>
        <section class="half-page">
          <router-view name="nomeado"></router-view>
        </section>
    </div>
    <footer id="rodape">
      <h2>Testando #Hash</h2>
      <b-link style="
      color:black;font-size:3rem" to="/">
        ^
      </b-link>
    </footer>
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
  [sucesso]{
            background: chocolate;
            margin: 0 0 2vh 0;  
        }
  
}

#rodape{
  margin-top: 200vh;
  padding-top: 5vh;
  background: cornflowerblue;
  color: #000;
}
</style>
