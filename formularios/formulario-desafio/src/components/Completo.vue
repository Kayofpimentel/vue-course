<template>
  <div class="pessoa">
      <div>
        <Rotulo name="Nome">
            <input v-model="value.nome" type="text">
        </Rotulo>
        <Rotulo name="Sobrenome">
            <input v-model="value.sobrenome" type="text">
        </Rotulo>
      </div>
      
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components:{Rotulo},
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    data(){ 
        return {
        }
    },
    computed:{
    }
}
</script>

<style>

</style>