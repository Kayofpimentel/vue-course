<template>
  <div id="loja">
    <h2>Loja</h2>
    <hr />
    <div class="conteudo">
      <div>
        <span>Adicionar:</span>
        <b-form-input v-model.number="quantidade"></b-form-input>
      </div>
      <div>
        <span>Itens de R$:</span>
        <b-form-input v-model.number="preco"></b-form-input>
      </div>
      <b-button variant="primary" @click="adicionar">Agora!</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Loja",
  data() {
    return {
      sequencia: 1,
    };
  },
  methods: {
    ...mapActions(/*"carrinho",*/ ["adicionarProdutoAsync"]),
    // adicionarProdutoAsync(produto){
    //   this.$store.dispatch('adicionarProduto', produto)
    // },
    adicionar() {
      const vm = this;
      const produto = {
        nome: `Produto ${vm.sequencia}`,
        quantidade: vm.quantidade,
        preco: vm.preco,
      };
      vm.sequencia++;

      vm.adicionarProdutoAsync(produto)
      // vm.store.commit('adicionarProduto', produto)
      // vm.$store.dispatch("adicionarProdutoAsync", produto);
      // vm.$store.state.produtos.push(produto)
    },
  },
  computed: {
    quantidade: {
      get() {
        const vm = this;
        return vm.$store.state.parametros.quantidade;
      },
      set(valor) {
        const vm = this;
        vm.$store.commit("setQuantidade", valor);
      },
    },
    preco: {
      get() {
        const vm = this;
        return vm.$store.state.parametros.preco;
      },
      set(valor) {
        const vm = this;
        vm.$store.commit("setPreco", valor);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#loja {
  min-height: inherit;
  background: limegreen;
}
</style>