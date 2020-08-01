<template>
  <div class="detalhes">
    <b-button :to="{name: 'editarUsuario', params: {id},
      query: {completo: true, lingua: 'pt'}, hash: 'rodape'}" sucesso>{{id}}</b-button>
  </div>
</template>

<script>
export default {
  props:{
    id:{
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>