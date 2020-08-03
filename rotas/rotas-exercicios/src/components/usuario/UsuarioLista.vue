<template>
  <div class="usuario-lista">
      <ul class="lista">
          <li v-for="(usuario,nome, id) in usuarios" :key="id" class="item-lista"><b-button :to="'/usuario/'+usuario" sucesso>{{usuario}}</b-button></li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            usuarios: {1:'Kayo', 2:'Lucas', 3:'Fred'}
        }
    }
}
</script>


<style lang="scss" scoped>
.usuario-lista{
    .item-lista{
        list-style: none;
    }
}
</style>