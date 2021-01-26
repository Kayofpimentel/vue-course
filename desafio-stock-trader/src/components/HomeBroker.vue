<template>
  <div id="homebroker">
    <h1>Homebrocker</h1>
    <div id="lista-bolsa">
      <div v-for="(acao, posicao) in bolsa" :key="posicao" class="card">
        <h5 class="card-header">
          {{ acao.nome }}
          <span
            >( Preço: {{ acao.preco }} | Quantidade:
            {{ acao.quantidade }} )</span
          >
        </h5>
        <div class="card-body">
          <div class="campo-venda">
            <label :for="acao.nome">Quantidade: </label>
            <input :name="acao.nome" v-model="acao.aComprar" type="text" />
          </div>
          <button
            @click="realizarCompra(acao.nome, +acao.aComprar)"
            type="button"
            class="btn btn-secondary"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bolsa: [
        { nome: "Apple", preco: 10, quantidade: 5, aComprar: 0 },
        { nome: "Microsoft", preco: 10, quantidade: 5, aComprar: 0 },
        { nome: "Inter", preco: 10, quantidade: 5, aComprar: 0 },
        { nome: "HP", preco: 10, quantidade: 5, aComprar: 0 },
        { nome: "Amazon", preco: 10, quantidade: 5, aComprar: 0 },
      ],
    };
  },
  methods: {
    realizarCompra(nomeAcao = String, quantidadeCompra = Number) {
      const vm = this;
      const indexAcao = vm.bolsa.findIndex((acao) => acao.nome === nomeAcao);
      vm.bolsa[indexAcao].quantidade += quantidadeCompra;
      vm.bolsa[indexAcao].aComprar = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
#lista-bolsa {
  .card-header {
    background: seagreen;
  }
}
</style>

