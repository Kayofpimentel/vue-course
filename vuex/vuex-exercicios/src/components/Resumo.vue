<template>
  <div id="resumo">
    <h2>Resumo</h2>
    <hr />
    <div class="conteudo">
      <h3>Total: {{ total }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  name: "Resumo",
  computed: mapGetters('carrinho', {
    total: 'valorTotal'
  })
  // computed: mapGetters(['valorTotal']),
  // computed: {
    
  //   total() {
  //     return this.$store.getters.valorTotal;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
#resumo {
  min-height: inherit;
  background: darkorchid;
}
</style>