<template>
  <div id="inicio">
    <h1>Negocie e Consulte as suas ações</h1>
    <ul>
      <li v-for="(msg, posicao) in mensagens.slice(-5).reverse()" :key="posicao">
        <p :class="`alert ${msg.tipo}`">
          <span class="badge badge-pill badge-light">i</span> {{ msg.texto }}
        </p>
      </li>
    </ul>
    <hr />
    <p class="saldo-inicio"><em>Seu saldo:</em> R$ {{ saldo }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    saldo() {
      const vm = this;
      return vm.$store.getters.getSaldo;
    },
    mensagens() {
      const vm = this;
      return vm.$store.getters.getMsgs;
    },
  },
};
</script>

<style scoped lang="scss">
#inicio {
  text-align: left;
  margin: 3.5vh auto 0 10vw;
  max-width: 80vw;
  ul {
    padding: 0;
    li {
      list-style-type: none;
      margin-bottom: 2vh;
      .alert {
        padding: 0.1vh 0 0.5vh 0.8vw;
        font-size: 1.2rem;
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
        .badge {
          font-size: 0.9rem;
        }
      }
      .venda {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
      }
      .compra {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
      }
    }
  }
  .saldo-inicio {
    em {
      font-style: normal;
      font-weight: bold;
    }
  }
}
</style>
