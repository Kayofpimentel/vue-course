<template>
  <div id="code-boxes">
    <section class="half-page">
      <Parametros></Parametros>
    </section>
    <section class="half-page">
      <Loja></Loja>
    </section>
    <section class="half-page">
      <Carrinho></Carrinho>
    </section>
    <section class="half-page">
      <Resumo></Resumo>
    </section>
  </div>
</template>

<script>
import Carrinho from "./../components/Carrinho.vue";
import Loja from "./../components/Loja.vue";
import Resumo from "./../components/Resumo.vue";
import Parametros from "./../components/Parametros.vue";

export default {
  name: "Home",
  components: { Carrinho, Loja, Resumo, Parametros },
};
</script>

<style lang="scss" scoped>
#code-boxes {

  section.half-page {
    padding: 0;
    margin: 5vh auto auto auto;
    min-height: 40vh;
    div{
      padding: 0;
    }
  }
  
}
</style>

