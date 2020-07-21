<template>
  <b-navbar variant="dark" class="menu">
    <b-navbar-nav>
      <b-nav-item active to="/">Rotas</b-nav-item>
      <b-nav-item to="/usuario">Usuário</b-nav-item>  
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #app .nav-link{
    color: darkcyan;

    &:hover{
      color: lightblue;
    }
  }

  #app .nav-link.active{
    color: lightcoral;
  }
</style>>
