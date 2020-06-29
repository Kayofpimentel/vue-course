<template>
  <div class="pessoa">
      <div>
          <input v-model="value.nome" type="text">
          <input v-model="value.sobrenome" type="text">
      </div>
      
  </div>
</template>

<script>
export default {
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