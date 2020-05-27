<template>
  <section class="half-page">
        <h2>Tabela</h2>
        <div id="tabela-desafio">
          <p class="first"><span>#ID</span><span>Nome</span></p>
          <template >
            <p v-for="(pessoa, id) in info" v-bind:key="id" @click="selecionarInfo(id+1, pessoa)"><span>{{id+1}}</span><span>{{pessoa.nome}}</span></p>
          </template>
          <p class="last"></p>
        </div>
    </section>
</template>

<script>
import barramento from "../barramento"
export default {
  data(){
    return {
      info: [{nome: 'João', idade: 50}, {nome: 'Maria', idade: 25}, {nome: 'Larissa', idade: 35}, {nome:'Doe', idade: 100}]
    }
  },
  methods:{
    selecionarInfo(id, pessoa){
      barramento.selecionarInfo(id, pessoa)
    }
  },
  created(){
  }
}
</script>

<style scoped>
  #tabela-desafio{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  #tabela-desafio p{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 1px solid black;
  }
  #tabela-desafio p span{
    width: 100%;
  }
  .first{
    font-weight: 700;
  }
</style>