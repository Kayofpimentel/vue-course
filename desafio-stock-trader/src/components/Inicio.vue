<template>
  <div id="inicio">
    <h1>Negocie e Consulte as suas ações</h1>
    <ul>
      <li v-for="(texto, posicao) in msgs" :key="posicao">
        <p class="alert alert-primary">
          <span class="badge badge-pill badge-light">i</span> {{ texto }}
        </p>
      </li>
    </ul>
    <hr />
    <p class="saldo-inicio"><em>Seu saldo:</em> R$ {{saldo}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgs: ["Oi", "Tchau"],
    };
  },
  computed: {
    saldo(){
      const vm = this
      return vm.$store.getters.getSaldo
    }
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
        .badge {
          font-size: 0.9rem;
        }
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
