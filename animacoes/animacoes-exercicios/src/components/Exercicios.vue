<template>
  <div id="exercicios">
    <h1>{{ msg }}</h1>
    <hr>
    <div id="code-boxes">

      <section class="half-page container">
        <h2>Fade</h2>
        <hr>
        <div class="mensagens-container">
          <transition name="fade" appear>
            <b-alert variant="dark" v-if="exibirTexto" show>{{textoAExibir}}</b-alert>
          </transition>
        </div>
        
        <b-button variant="danger" @click.prevent="exibirTexto=!exibirTexto">{{exibirTexto ? "Sumir" : "Exibir"}}</b-button>
      </section>

      <section class="half-page">
        <h2>Slide&Fade</h2>
        <hr>
        <div class="mensagens-container">
          <transition name="slide" type="animation" appear>
            <b-alert variant="dark" v-if="slideTexto" show>{{textoAExibir}}</b-alert>
          </transition>
        </div>
        <b-button variant="danger" @click.prevent="slideTexto=!slideTexto">{{slideTexto ? "Sumir" : "Exibir"}}</b-button>
      </section>

      <section class="half-page">
        <h2>Animate.css</h2>
        <hr>
        <div class="mensagens-container">
          <transition :enter-active-class="tipoDeAnimate" leave-active-class="animate__animated animate__lightSpeedOutRight animate_fadeOut" appear>
            <b-alert variant="dark" v-if="animateTexto" show>{{textoAExibir}}</b-alert>
          </transition>
        </div>
        <b-button variant="danger" @click.prevent="animateTexto=!animateTexto">{{animateTexto ? "Sumir" : "Exibir"}}</b-button>
      </section>

      <section class="half-page">
        <h2>Com v-bind</h2>
        <hr>
        <div class="mensagens-container">
          <transition :name="tipoAnimacao" type="transition" appear>
            <b-alert variant="dark" v-if="selectAnimationTexto" show>{{textoAExibir}}</b-alert>
          </transition>
        </div>
        <b-select v-model="tipoAnimacao" class="mt-2">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </b-select>
        <b-button variant="danger" @click.prevent="selectAnimationTexto=!selectAnimationTexto">{{selectAnimationTexto ? "Sumir" : "Exibir"}}</b-button>
      </section>

      <section class="half-page">
        <h2>Entre elementos</h2>
        <hr>
        <div class="mensagens-container">
          <transition :name="tipoAnimacaoTroca" type="transition" mode="out-in" appear>
            <b-alert variant="dark" v-if="trocaDeTexto" show key="info">{{textoAExibir}}</b-alert>
            <b-alert variant="success" v-else show key="warn">{{textoAExibir}}</b-alert>
          </transition>
        </div>
        <b-select v-model="tipoAnimacaoTroca" class="mt-2">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </b-select>
        <b-button variant="danger" @click.prevent="trocaDeTexto=!trocaDeTexto">{{trocaDeTexto ? "Ativar" : "Desativar"}}</b-button>
      </section>

      <section class="half-page">
        <h2>Transições com JS</h2>
        <hr>
        <div class="mensagens-container">
          <transition
          :css="false"
          @enter="enter" @leave="leave"
          @before-enter="beforeEnter" @before-leave="beforeLeave">
            <div v-if="exibirCaixa" class="caixa"></div>
          </transition>
        </div>
        <b-button variant="danger" @click.prevent="exibirCaixa=!exibirCaixa">{{exibirCaixa ? "Sumir" : "Exibir"}}</b-button>
      </section>

      <section class="half-page">
        <h2>Transições de Componentes</h2>
        <hr>
        <div class="mensagens-container">
          <transition name="fade" mode="out-in" appear>
            <component :is="componenteSelecionado" :mensagem="textoAExibir"></component>
          </transition>
        </div>
        <b-button @click.prevent="componenteSelecionado='Transitivo2'" variant="danger" v-if="componenteSelecionado==='Transitivo1'">
          Ir para 2
        </b-button>
        <b-button @click.prevent="componenteSelecionado='Transitivo1'"
        v-if="componenteSelecionado==='Transitivo2'">
          Ir para 1
        </b-button>
        
      </section>

      <section class="half-page">
        <h2>Transições em grupos</h2>
        <hr>
        <div class="mensagens-container">
            <b-list-group >
              <transition-group name="slide" mode="out-in" appear tag="div">
                <b-list-group-item variant="primary" v-for="(aluno, indice) in alunos" :key="aluno" @click.prevent="removerAluno(indice)"> {{aluno}} </b-list-group-item>
            </transition-group>
            </b-list-group>
            <b-button @click="adicionarAluno">Adicionar Aluno</b-button>
          
        </div>
      </section>
      
    </div>
  </div>
</template>

<script>
import Transitivo1 from "./Transitivo1.vue"
import Transitivo2 from "./Transitivo2.vue"

export default {
  name: "Exercicios",
  components: {Transitivo1, Transitivo2},
  props: {
    msg: String
  },
  data(){
    return{
      textoAExibir: "Mensagem para o usuário",
      exibirTexto: true,
      slideTexto: true,
      animateTexto: true,
      selectAnimationTexto: true,
      trocaDeTexto: true,
      exibirCaixa: true,
      tipoAnimacao: "fade",
      tipoAnimacaoTroca: "fade",
      tipoDeAnimate: "animate__animated animate__jackInTheBox animate__fadeIn",
      componenteSelecionado: "Transitivo1",
      larguraBaseCaixa: 9,
      alunos: ["Kayo", "Gleidson", "Lucas", "Hernan"]
      
    }
  },
  methods:{
    adicionarAluno(){
      const nome = Math.random().toString(36).substring(2)
      this.alunos.push(nome)
    },
    removerAluno(indice){
      this.alunos.splice(indice, 1)
    },
    animarCaixa(el, done){
      let numeroDeRodadas = 30
      let rodada = 0
      const temporizador = setInterval(() => {
        el.style.width = `${(!this.exibirCaixa ? numeroDeRodadas - rodada  : rodada)*(this.larguraBaseCaixa/numeroDeRodadas)}vw`
        rodada++
        if( rodada >= numeroDeRodadas){
          clearInterval(temporizador)
          done()
        }
      }, 100)
    },
    beforeEnter(el){
      el.style.width = "0"
    },
    enter(el, done){
      this.animarCaixa(el, done)
    },
    beforeLeave(el){
      el.style.width = "9vw"
    },
    leave(el, done){
      this.animarCaixa(el, done)
    }
  }
};
</script>

<style scoped lang="scss">

  #code-boxes{

    h2{
      margin: 1vh auto;
      padding: 0;
    }
    
    .mensagens-container{
      
      min-height: 15vh;
      
      .alert{
        margin: 1vh auto;
      }

      .caixa{
        height: 10vh;
        width: 9vw;
        background-color: green;
        margin: 0 auto;
        padding: 0;
      }
    }

    .btn{
      margin: 1vh auto 2vh auto;
    }

    .fade-enter, .fade-leave-to, .slide-enter, .slide-leave-to{
      opacity: 0;
    }

    .fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active{
      transition: opacity 2s;
    }

    .slide-leave-active{
      position: absolute;
      width: 36vw;
      margin: 1vh auto;
    }

    @keyframes slide-in {
      from {transform: translateY(10vh)}
      to {transform: translateY(0vh);}

    }

    @keyframes slide-out {
      from {transform: translateY(0vh)}
      to {transform: translateY(10vh);}

    }

    .slide-enter-active{
      animation: slide-in 2s linear;
    }

    .slide-leave-active{
      animation: slide-out 2s linear;
    }

    .slide-move{
      transition: transform 1s;
    }

  } 

</style>
