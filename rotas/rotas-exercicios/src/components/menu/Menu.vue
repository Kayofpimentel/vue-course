<template>
  <b-navbar variant="dark" class="menu">
    <b-navbar-nav>
      <b-nav-item exact to="/">Home</b-nav-item>
      <b-nav-item to="/usuario">Usuários</b-nav-item>
      <b-nav-item to="/#rodape">Rodape</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data(){
    return{
      usuarios: []
    }
  }
}
</script>

<style lang="scss" scoped>
  #app{
    .nav-link{
    color: darkcyan;
      &:hover{
        color: lightblue;
      }
    }
    .nav-item{
      .router-link-exact-active,.router-link-active{
        color: coral;
      }
    }
  }
  
  
</style>
