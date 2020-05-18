<template>
  <div class="contadores">
      <app-contador></app-contador>
      <app-contador></app-contador>
      <app-contador></app-contador>
  </div>
</template>

<script>

import Contador from './contador.vue'

export default {
    components: {

        'app-contador': Contador
    }
}
</script>

<style>
    div{
        border: 1px solid red;
    }
</style>