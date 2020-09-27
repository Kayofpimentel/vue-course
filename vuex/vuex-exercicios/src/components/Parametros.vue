<template>
  <div id="parametros">
    <h2>Parâmetros</h2>
    <hr />
    <div class="conteudo">
      <div>
        <span>Quantidade Padrão:</span>
        <b-form-input v-model="quantidade"></b-form-input>
      </div>
      <div>
        <span>Preço:</span>
        <b-form-input v-model="preco"></b-form-input>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  computed: {
    quantidade: {
      get() {
        const vm = this
        return vm.$store.state.parametros.quantidade
      },
      set(valor) {
        const vm = this
        vm.$store.commit('setQuantidade', valor)
      }
    },
    preco: {
      get() {
        const vm = this
        return vm.$store.state.parametros.preco
      },
      set(valor) {
        const vm = this
        vm.$store.commit('setPreco', valor)
      },
    }
  }
};
</script>

<style lang="scss" scoped>
#parametros {
  min-height: inherit;
  background: lightcoral;
}
</style>