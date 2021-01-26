<template>
  <div id="portfolio">
    <h1>Suas ações</h1>
    <div id="lista-portfolio">
      <div v-for="(acao, posicao) in portfolio" :key="posicao" class="card">
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
            <input v-model="acao.aVender" :name="acao.nome" type="text" />
          </div>
          <button
            @click="realizarVenda(acao.nome, +acao.aVender)"
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
    return {
      portfolio: [
        { nome: "Apple", preco: 10, quantidade: 5, aVender: 0 },
        { nome: "Microsoft", preco: 10, quantidade: 5, aVender: 0 },
        { nome: "Inter", preco: 10, quantidade: 5, aVender: 0 },
        { nome: "HP", preco: 10, quantidade: 5, aVender: 0 },
        { nome: "Magalu", preco: 10, quantidade: 5, aVender: 0 },
      ],
    };
  },
  methods: {
    realizarVenda(nomeAcao = String, quantidadeVenda = Number) {
      const vm = this;
      const indexAcao = vm.portfolio.findIndex(
        (acao) => acao.nome === nomeAcao
      );
      console.log(indexAcao)
      console.log(quantidadeVenda)
      console.log(vm.portfolio[indexAcao].quantidade)
      vm.portfolio[indexAcao].quantidade -=
        vm.portfolio[indexAcao].quantidade >= quantidadeVenda
          ? quantidadeVenda
          : 0;
      vm.portfolio[indexAcao].aVender = 0;
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