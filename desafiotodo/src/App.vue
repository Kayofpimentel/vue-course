<template>
  <div id="app">
    <Header imgSrc="./assets/logo.png">
    </Header>
    <hr class="header-separator">
    <Content msg="TODO APP" />
    <Footer>
      <img alt="TODO app logo" />
    </FOoter>
  </div>
</template>

<script>
import Content from "./components/content.vue";
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"

export default {
  name: "App",
  components: {
    Content, Header, Footer
  }
};
</script>

<style lang="scss">
@import url("./estilo.scss");

#app {
  padding: 0 0 0 0;
  margin: 2vh 0 0 0;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-style{
  img{
    max-width: 12vh ;
  }

}
</style>
