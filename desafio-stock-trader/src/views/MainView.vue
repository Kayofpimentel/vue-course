<template>
  <div class="main-view">
    <component :is="focusedComponent"></component>
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
  data() {
    return {};
  },
  computed:{
    focusedComponent(){
      const vm = this
      return vm.$store.getters.getComponent
    }
  }
};
</script>
