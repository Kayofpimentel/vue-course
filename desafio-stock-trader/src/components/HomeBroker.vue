<template>
  <div id="homebroker">
    <h1>Homebrocker</h1>
    <div id="lista-bolsa">
      <div v-for="(acao, index) in bolsa" :key="index" class="card">
        <h5 class="card-header">
          {{ acao.nome }}
          <span
            >( Preço: {{ acao.preco }} | Quantidade:
            {{ acao.quantidadePortfolio }} )</span
          >
        </h5>
        <div class="card-body">
          <div class="campo-venda">
            <label :for="acao.nome">Quantidade: </label>
            <input
              :name="acao.nome"
              v-model="acao.aOperar"
              type="text"
            />
          </div>
          <button
            @click="realizarCompra(acao.nome, acao.aOperar)"
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
    return {};
  },
  computed: {
    bolsa() {
      const vm = this;
      return vm.$store.state.acoes;
    },
  },
  methods: {
    realizarCompra(nomeAcao, quantidadeAcoes) {
      const vm = this;
      if (quantidadeAcoes > 0) {
        const indexAcao = vm.$store.getters.getIndexAcao(nomeAcao)
        vm.$store.dispatch("comprarAcao", indexAcao);
      }
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

