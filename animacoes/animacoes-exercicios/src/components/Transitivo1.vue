<template>
  <div class="transitivo1">
      <b-alert variant="danger" show>{{mensagem}}</b-alert>
  </div>
</template>

<script>
export default {
    name:"Transitivo1",
    props: {
        mensagem: String
    }
}
</script>

<style>
    
</style>