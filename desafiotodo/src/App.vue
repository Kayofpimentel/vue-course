<template>
  <div id="app">
    <Header class="componente-estrutura"></Header>
    <hr class="header-separator" />
    <Content class="componente-estrutura" msg="TODO APP"></Content>
    <hr class="footer-separator" />
    <Footer class="componente-estrutura"></Footer>
  </div>
</template>

<script>
import Content from "./components/content.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Content,
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import url("./estilo.scss");

#app {
  padding: 2vh 0 0 0;
  margin: 0 0 0 0;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

  hr {
    border: 0;
    border-top: .4vh solid darkgray;
    border-bottom: .3vh solid lightgray;
    margin: 1vh 0;
    padding: 0;
  }

  a{
    color: var(--secondary);
    
  }
  a:hover{
    color: #000;
  }

  .componente-estrutura{
    width: inherit;
  }

  .header-style {
    max-height: 20vh;
  }

  .footer-style {
    max-height: 10vh;
  }

  .content-style {
    min-height: 65vh;
  }
}
</style>
