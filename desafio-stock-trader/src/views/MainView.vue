<template>
  <div class="main-view">
      <transition
        name="componentes"
        :enter-active-class="animateIn"
        :leave-active-class="animateOut"
        type="animation"
        mode="out-in"
      >
        <component :is="focusedComponent"></component>
      </transition>
  </div>
</template>

<script>
import Inicio from "@/components/Inicio.vue";
import HomeBroker from "@/components/HomeBroker.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "MainView",
  components: {
    Inicio,
    HomeBroker,
    Portfolio,
  },
  created() {
    const vm = this;
    vm.$store.dispatch("iniciarDados").then(() => {
      vm.$store.dispatch("variarAcao");
      vm.$store.dispatch("atualizarResultado");
    });
  },
  data() {
    return {
      animateOut: "animate__animated animate__backOutDown",
      animateIn: "animate__backInLeft animate__animated",
    };
  },
  computed: {
    focusedComponent() {
      const vm = this;
      return vm.$store.getters.getComponent;
    },
  },
};
</script>

<style lang="scss">
.main-view{
  overflow: hidden;
}

#lista-bolsa,
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
      color: white;
      font-size: 1rem;
      span {
        font-size: 0.8rem;
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
        background: lightseagreen;
        font-size: 0.8rem;
        height: 6vh;
        width: 25%;
      }
    }
  }
}
</style>