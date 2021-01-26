<template>
  <div id="portfolio">
    <h1>Suas ações</h1>
    <div id="lista-portfolio">
      <div v-for="(acao, posicao) in portfolio" :key="posicao" class="card">
        <h5 class="card-header">
          {{ acao.acao }}
          <span
            >( Preço: {{ acao.preco }} | Quantidade:
            {{ acao.quantidade }} )</span
          >
        </h5>
        <div class="card-body">
          <div class="campo-venda">
            <label :for="acao.acao">Quantidade: </label>
            <input :name="acao.acao" type="text" />
          </div>
          <button type="button" class="btn btn-secondary">Vender</button>
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
        { acao: "Apple", preco: 10, quantidade: 5 },
        { acao: "Apple", preco: 10, quantidade: 5 },
        { acao: "Apple", preco: 10, quantidade: 5 },
        { acao: "Apple", preco: 10, quantidade: 5 },
        { acao: "Apple", preco: 10, quantidade: 5 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#lista-portfolio {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 90vw;
  margin: 5vh auto 0 auto;
  .card {
    width: 30%;
    height: 22vh;
    margin: 0.5rem;
    text-align: left;
    .card-header {
      background: steelblue;
      color: white;
      font-size: 1rem;
      span {
        font-size: 0.8 rem;
      }
    }
    .card-body {
      padding: 0;
      .campo-venda {
        display: inline-block;
        width: 65%;
        margin: 0.5vw;
        font-size: 0.8rem;
        label {
          margin: 0;
        }
        input {
          border: 0;
          border-bottom: 1px solid black;
          width: 100%;
          height: 5vh;
          padding: 0;
        }
      }
      button {
        background: mediumseagreen;
        font-size: 0.8rem;
        height: 6vh;
        width: 25%;
      }
    }
  }
}
</style>