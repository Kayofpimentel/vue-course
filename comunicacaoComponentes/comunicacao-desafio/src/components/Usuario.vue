<template>
  <section class="half-page">
        <h2>Info</h2>
        <p id="no-info" v-if="!info">Nenhum dado está selecionado.</p>
        <div v-if="info" id="info-selecionada">
          <p>#ID: {{info.id}}</p>
          <p>Nome: {{info.pessoa.nome}}</p>
          <p>Idade: {{info.pessoa.idade}}</p>
        </div>
        <button @click="limparDados">Limpar</button>
        <div></div>
    </section>
</template>

<script>
import barramento from '../barramento'
export default {
  data(){
    return{
      info: null,
      message: 'Nenhum dado está selecionado.'
    }
  },
  methods: {
    limparDados(){
      const vm = this
      vm.info = null
    }
  },
  created(){
    const vm = this
    barramento.mostrarInfo(info => vm.info = info)
  }
}
</script>

<style>

</style>