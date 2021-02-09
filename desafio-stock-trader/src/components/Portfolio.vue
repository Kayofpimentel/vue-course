<template>
  <div id="portfolio">
    <h1>Suas ações</h1>
    <div id="lista-portfolio">
      <div v-for="(acao, index) in portfolio" :key="index" class="card">
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
            <input :name="acao.nome" v-model="acao.aOperar" type="text" />
          </div>
          <button
            @click="realizarVenda(acao.nome, acao.aOperar)"
            type="button"
            class="btn btn-secondary"
          >
            Vender
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
    portfolio() {
      const vm = this;
      return vm.$store.getters.getAcoes.filter(
        (acao) => acao.quantidadePortfolio > 0
      );
    },
  },
  methods: {
    realizarVenda(nomeAcao, quantidadeAcoes) {
      const vm = this;
      if (quantidadeAcoes > 0) {
        const indexAcao = vm.$store.getters.getIndexAcao(nomeAcao);
        vm.$store.dispatch("venderAcao", indexAcao);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#lista-portfolio {
  .card-header {
    background: steelblue;
  }
}
</style>