<template>
  <div id="portfolio">
    <h1>Suas ações</h1>
    <div id="lista-portfolio">
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
              v-model="$store.state.acoes[index].aOperar"
              type="number"
            />
          </div>
          <button
            @click="realizarVenda(index,$store.state.acoes[index].aOperar)"
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
    bolsa() {
      const vm = this;
      return vm.$store.state.acoes;
    },
  },
  methods: {
    realizarVenda(indexAcao,quantidadeAcoes) {
      const vm = this;
      if(quantidadeAcoes !== 0){
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