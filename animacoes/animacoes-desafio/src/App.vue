<template>
  <div id="app">
    <div class="lessons">
      <h1>Time to Quiz!</h1>
      <hr>
      <Quiz :pergunta="perguntas[perguntaAtual]"></Quiz>
    </div>  
  </div>
</template>

<script>
import Quiz from "./components/Quiz.vue"


export default {
  
  name: "App",
  components: {
    Quiz
  },
  data(){
    return{
      perguntas: [
        {pergunta: "Quanto é 1 + 1", respostas: ["1", "2", "3", "4"], resposta:1},
        {pergunta: "Qual o nome do desafio", respostas: ["Vue", "Teste", "Quiz", "Não sei"], resposta:2},
        {pergunta: "Quanto é 11 + 11", respostas: ["5", "22", "6", "9"], resposta:1},
        {pergunta: "Quantos ovos têm em meia dúzia de caixa de ovos?", respostas: ["72", "6", "24", "12"], resposta:0},
      ],
    }
  },
  computed:{
    perguntaAtual(){
      return 0
    }
  }
    
};
</script>

<style lang="scss">
@import url("../../../estilo/dom.css");

body{
    min-height: 100vh;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    background: rgb(102,102,102);
    background: linear-gradient(125deg, rgba(209, 130, 196, 0.85) 0%, rgb(126, 54, 104) 30%, rgba(107, 32, 107, 0.25) 100%);

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkblue;
}
</style>
