<template>
  <div>
      <span>{{contador}}</span>
      <button @click="adicionar">Aumentar</button>
      <button @click="subtrair">Diminuir</button>
  </div>
</template>

<script>
export default {
  data: () => ({

    contador: 0

  }),
  methods: {

      adicionar(){
          this.contador++
      },

      subtrair(){
          this.contador--
      }

  }
}

</script>

<style scoped>
  button{
    border: 1px solid red;
  }
</style>