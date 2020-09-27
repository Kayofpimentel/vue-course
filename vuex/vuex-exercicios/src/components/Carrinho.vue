<template>
  <div id="carrinho">
    <h2>Carrinho</h2>
    <hr />
    <div class="conteudo">
      <div class="tabela-carrinho">
        <div class="linha">
          <span>
            <h3>Nome</h3>
          </span>
          <span>
            <h3>Quantidade</h3>
          </span>
          <span>
            <h3>Preço</h3>
          </span>
        </div>
        <div v-for="produto in produtos" :key="produto.nome" class="linha">
          <span>{{ produto.nome }}</span>
          <span>{{ produto.quantidade }}</span>
          <span>{{ produto.preco }}</span>
        </div>
      </div>
      <p class="total-carrinho">Total: {{ total }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Carrinho",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("carrinho", {
      total: "valorTotal",
    }),
    produtos() {
      const vm = this;
      return vm.$store.state.carrinho.produtos;
    },
  },
};
</script>

<style lang="scss" scoped>
#carrinho {
  min-height: inherit;
  background: lightskyblue;

  .conteudo {
    .tabela-carrinho {
      padding-top: 0;
    }
  }

  .linha {
    border-bottom: 1.5px solid black;
    display: flex;

    h3 {
      font-size: 1.5rem;
    }
  }

  .total-carrinho {
    text-align: right;
    width: 50%;
    margin: auto;
  }
}
</style>