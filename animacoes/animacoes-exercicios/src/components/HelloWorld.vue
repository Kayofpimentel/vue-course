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
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercicios",
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
      tipoAnimacao: "fade",
      tipoDeAnimate: "animate__animated animate__jackInTheBox animate__fadeIn"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  #code-boxes{

    h2{
      margin: 1vh auto;
      padding: 0;
    }
    
    .mensagens-container{
      
      min-height: 12vh;
      
      .alert{
        margin: 1vh auto;
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

    @keyframes slide-in {
      from {transform: translateY(10vh)}
      to {transform: translateY(0vh);}

    }

    @keyframes slide-out {
      from {transform: translateY(0vh)}
      to {transform: translateY(10vh);}

    }

    .slide-enter-active{
      animation: slide-in 4s linear;
    }

    .slide-leave-active{
      animation: slide-out 4s linear;
    }
  } 

</style>
